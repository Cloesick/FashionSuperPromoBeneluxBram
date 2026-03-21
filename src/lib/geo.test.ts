import { describe, expect, it } from "vitest";
import { haversineDistanceKm, toRadians } from "@/lib/geo";

describe("geo", () => {
  it("toRadians converts degrees to radians", () => {
    expect(toRadians(0)).toBe(0);
    expect(toRadians(180)).toBeCloseTo(Math.PI, 8);
  });

  it("haversineDistanceKm returns ~0 for identical points", () => {
    const a = { lat: 51.2194, lng: 4.4025 };
    expect(haversineDistanceKm(a, a)).toBeCloseTo(0, 8);
  });

  it("haversineDistanceKm returns a reasonable distance (Antwerpen -> Brussel)", () => {
    const antwerp = { lat: 51.2194, lng: 4.4025 };
    const brussels = { lat: 50.8503, lng: 4.3517 };
    const d = haversineDistanceKm(antwerp, brussels);

    expect(d).toBeGreaterThan(35);
    expect(d).toBeLessThan(55);
  });
});
