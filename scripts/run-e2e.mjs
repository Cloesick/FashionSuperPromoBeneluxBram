import { spawn } from "node:child_process";
import { readFile } from "node:fs/promises";
import { rmSync } from "node:fs";
import net from "node:net";
import path from "node:path";

function parseArgs(argv) {
	const args = new Set(argv);
	return {
		open: args.has("--open"),
		spec: (() => {
			const idx = argv.indexOf("--spec");
			if (idx === -1) return null;
			const v = argv[idx + 1];
			return v || null;
		})(),
		port: (() => {
			const idx = argv.indexOf("--port");
			if (idx === -1) return null;
			const v = argv[idx + 1];
			if (!v) return null;
			const n = Number(v);
			return Number.isFinite(n) ? n : null;
		})(),
	};
}

function isPortFree(port) {
	return new Promise((resolve) => {
		const server = net
			.createServer()
			.once("error", () => resolve(false))
			.once("listening", () => {
				server.close(() => resolve(true));
			})
			.listen(port);
	});
}

async function findFreePort(start, end) {
	for (let port = start; port <= end; port++) {
		// eslint-disable-next-line no-await-in-loop
		if (await isPortFree(port)) return port;
	}
	return null;
}

async function waitForHttpOk(url, timeoutMs) {
	const start = Date.now();
	// eslint-disable-next-line no-constant-condition
	while (true) {
		try {
			const res = await fetch(url, { redirect: "follow" });
			if (res.ok) return;
		} catch {
			// ignore
		}

		if (Date.now() - start > timeoutMs) {
			throw new Error(`Timed out waiting for ${url}`);
		}

		await new Promise((r) => setTimeout(r, 250));
	}
}

async function detectNextDistDir() {
	try {
		const nextConfigPath = path.resolve(process.cwd(), "next.config.ts");
		const src = await readFile(nextConfigPath, "utf8");
		const match = src.match(/distDir\s*:\s*["']([^"']+)["']/);
		if (!match) return ".next";
		const raw = match[1] ?? ".next";
		return raw || ".next";
	} catch {
		return ".next";
	}
}

function tryRemoveFile(filePath) {
	try {
		rmSync(filePath, { force: true });
	} catch {
		// ignore
	}
}

function tryRemoveNextDevLock(distDir) {
	const lockPath = path.resolve(process.cwd(), distDir, "dev", "lock");
	tryRemoveFile(lockPath);
}

function tryRemoveDir(dirPath) {
	try {
		rmSync(dirPath, { recursive: true, force: true });
	} catch {
		// ignore
	}
}

async function detectNextBasePath() {
	try {
		const nextConfigPath = path.resolve(process.cwd(), "next.config.ts");
		const src = await readFile(nextConfigPath, "utf8");
		const match = src.match(/basePath\s*:\s*["']([^"']+)["']/);
		if (!match) return "";
		const raw = match[1] ?? "";
		if (!raw || raw === "/") return "";
		return raw.startsWith("/") ? raw : `/${raw}`;
	} catch {
		return "";
	}
}

async function assertLooksLikeSuperPromo(appBaseUrl) {
	const homeRes = await fetch(`${appBaseUrl}/`, { redirect: "follow" });
	if (!homeRes.ok) {
		throw new Error(`Expected ${appBaseUrl}/ to be OK, got ${homeRes.status}`);
	}

	const homeHtml = await homeRes.text();
	if (!homeHtml.includes("SuperPromo")) {
		throw new Error(
			`Server at ${appBaseUrl} does not look like SuperPromo (missing 'SuperPromo' in homepage HTML)`,
		);
	}

	const foldersRes = await fetch(`${appBaseUrl}/folders`, {
		redirect: "follow",
	});
	if (!foldersRes.ok) {
		throw new Error(
			`Expected ${appBaseUrl}/folders to be OK, got ${foldersRes.status}`,
		);
	}

	const robotsRes = await fetch(`${appBaseUrl}/robots.txt`, {
		redirect: "follow",
	});
	if (!robotsRes.ok) {
		throw new Error(
			`Expected ${appBaseUrl}/robots.txt to be OK, got ${robotsRes.status}`,
		);
	}
}

function killProcessTree(child) {
	if (!child.pid) return;

	if (process.platform === "win32") {
		spawn("taskkill", ["/pid", String(child.pid), "/T", "/F"], {
			stdio: "ignore",
			windowsHide: true,
		});
		return;
	}

	child.kill("SIGTERM");
}

function withWindowsSystemPaths(env) {
	if (process.platform !== "win32") return env;

	const systemRoot = env.SystemRoot || env.SYSTEMROOT || "C:\\Windows";
	const required = [
		path.join(systemRoot, "System32"),
		path.join(systemRoot, "System32", "WindowsPowerShell", "v1.0"),
	];

	const currentPath = env.Path || env.PATH || "";
	const parts = currentPath.split(";").filter(Boolean);

	const has = (p) => parts.some((x) => x.toLowerCase() === p.toLowerCase());

	for (const p of required) {
		if (!has(p)) parts.push(p);
	}

	const nextPath = parts.join(";");
	return {
		...env,
		PATH: nextPath,
		Path: nextPath,
	};
}

async function main() {
	const { open, spec, port: requestedPort } = parseArgs(process.argv.slice(2));

	const nextCmd =
		process.platform === "win32"
			? path.resolve(process.cwd(), "node_modules", ".bin", "next.cmd")
			: path.resolve(process.cwd(), "node_modules", ".bin", "next");

	const cypressCmd =
		process.platform === "win32"
			? path.resolve(process.cwd(), "node_modules", ".bin", "cypress.cmd")
			: path.resolve(process.cwd(), "node_modules", ".bin", "cypress");

	const port =
		requestedPort ??
		(await findFreePort(3100, 3199)) ??
		(() => {
			throw new Error("No free port found in range 3100-3199");
		})();

	const basePath = await detectNextBasePath();
	const distDir = await detectNextDistDir();

	const baseUrl = `http://localhost:${port}`;
	const appBaseUrl = `${baseUrl}${basePath}`;

	tryRemoveDir(path.resolve(process.cwd(), distDir));
	tryRemoveNextDevLock(distDir);

	const childEnv = withWindowsSystemPaths({
		...process.env,
		PORT: String(port),
	});

	const next = spawn(nextCmd, ["dev", "-p", String(port)], {
		stdio: "inherit",
		shell: process.platform === "win32",
		env: childEnv,
	});

	const nextExit = new Promise((resolve) => {
		next.on("exit", (code, signal) => {
			resolve({ code: code ?? null, signal: signal ?? null });
		});
	});

	const cleanup = () => killProcessTree(next);
	process.on("exit", cleanup);
	process.on("SIGINT", () => {
		cleanup();
		process.exit(130);
	});
	process.on("SIGTERM", () => {
		cleanup();
		process.exit(143);
	});

	try {
		await Promise.race([
			(async () => {
				await waitForHttpOk(`${appBaseUrl}/`, 60_000);
				await assertLooksLikeSuperPromo(appBaseUrl);
			})(),
			(async () => {
				const { code, signal } = await nextExit;
				throw new Error(
					`next dev exited before tests ran (code=${code ?? "null"}, signal=${signal ?? "null"})`,
				);
			})(),
		]);

		const cypressArgsBase = open
			? ["open", "--config", `baseUrl=${appBaseUrl}`]
			: ["run", "--config", `baseUrl=${appBaseUrl}`];

		const cypressArgs = spec
			? [...cypressArgsBase, "--spec", spec]
			: cypressArgsBase;

		const cypress = spawn(cypressCmd, cypressArgs, {
			stdio: "inherit",
			shell: process.platform === "win32",
			env: childEnv,
		});

		const exitCode = await new Promise((resolve, reject) => {
			cypress.on("error", reject);
			cypress.on("exit", (code) => resolve(code ?? 1));
		});

		process.exitCode = exitCode;
	} finally {
		cleanup();
	}
}

main().catch((err) => {
	console.error(err);
	process.exit(1);
});
