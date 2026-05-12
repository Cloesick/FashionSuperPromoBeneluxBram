import fs from "fs";
import path from "path";
import { createClient } from "@supabase/supabase-js";
import { Folder, Deal, ScrapedData } from "./types";

const DATA_DIR = path.join(process.cwd(), "data", "folders");

const STORAGE_BUCKET = process.env.SUPABASE_FOLDERS_BUCKET || "folders";
const VERTICAL = process.env.VERTICAL || "superpromobelgie";

function getSupabaseServerClient() {
	const url = process.env.SUPABASE_URL;
	const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
	if (!url || !key) return null;

	return createClient(url, key, {
		auth: {
			persistSession: false,
			autoRefreshToken: false,
			detectSessionInUrl: false,
		},
	});
}

function readScrapedData(retailerSlug: string): ScrapedData | null {
	const filePath = path.join(DATA_DIR, `${retailerSlug}.json`);
	if (!fs.existsSync(filePath)) return null;

	try {
		const raw = fs.readFileSync(filePath, "utf-8");
		return JSON.parse(raw);
	} catch {
		console.error(`Failed to read folder data for ${retailerSlug}`);
		return null;
	}
}

async function readScrapedDataFromStorage(
	retailerSlug: string,
): Promise<ScrapedData | null> {
	const supabase = getSupabaseServerClient();
	if (!supabase) return null;

	const objectPath = `${VERTICAL}/${retailerSlug}/current.json`;
	try {
		const { data, error } = await supabase.storage
			.from(STORAGE_BUCKET)
			.download(objectPath);
		if (error || !data) return null;

		const ab = await data.arrayBuffer();
		const raw = Buffer.from(ab).toString("utf-8");
		return JSON.parse(raw) as ScrapedData;
	} catch {
		console.error(`Failed to read storage folder data for ${retailerSlug}`);
		return null;
	}
}

async function readScrapedDataPreferred(
	retailerSlug: string,
): Promise<ScrapedData | null> {
	const fromStorage = await readScrapedDataFromStorage(retailerSlug);
	if (fromStorage) return fromStorage;
	return readScrapedData(retailerSlug);
}

export async function getFoldersForRetailer(
	retailerSlug: string,
): Promise<Folder[]> {
	const data = await readScrapedDataPreferred(retailerSlug);
	return data?.folders ?? [];
}

export async function getDealsForRetailer(
	retailerSlug: string,
): Promise<Deal[]> {
	const data = await readScrapedDataPreferred(retailerSlug);
	return data?.deals ?? [];
}

export async function getCurrentFolder(
	retailerSlug: string,
): Promise<Folder | null> {
	const folders = await getFoldersForRetailer(retailerSlug);
	if (folders.length === 0) return null;

	const now = new Date();
	const current = folders.find((f) => {
		const from = new Date(f.validFrom);
		const until = new Date(f.validUntil);
		return now >= from && now <= until;
	});

	return current ?? folders[0];
}

export async function getScrapedAt(retailerSlug: string): Promise<Date | null> {
	const data = await readScrapedDataPreferred(retailerSlug);
	return data?.scrapedAt ? new Date(data.scrapedAt) : null;
}

export async function getAllCurrentFolders(): Promise<
	{ slug: string; folder: Folder }[]
> {
	if (!fs.existsSync(DATA_DIR)) return [];

	const files = fs.readdirSync(DATA_DIR).filter((f) => f.endsWith(".json"));

	const results = await Promise.all(
		files.map(async (file) => {
			const slug = file.replace(".json", "");
			const folder = await getCurrentFolder(slug);
			if (!folder) return null;
			return { slug, folder };
		}),
	);

	return results.filter(Boolean) as { slug: string; folder: Folder }[];
}
