import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

vi.mock("next/link", () => {
  return {
    default: ({ href, children, ...props }: any) => (
      <a href={href} {...props}>
        {children}
      </a>
    ),
  };
});

import { Header } from "@/components/Header";

describe("Header", () => {
  it("renders SuperPromo brand", () => {
    render(<Header />);
    expect(screen.getByText("SuperPromo")).toBeInTheDocument();
  });

  it("renders navigation links", () => {
    render(<Header />);
    expect(screen.getAllByRole("link", { name: /Home/i }).length).toBeGreaterThan(0);
    expect(screen.getAllByRole("link", { name: /Folders/i }).length).toBeGreaterThan(0);
  });
});
