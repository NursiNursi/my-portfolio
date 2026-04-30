import { describe, expect, it } from "vitest";
import { makeAiImageUrl } from "../lib/image";
import { PROJECTS } from "../lib/data";

describe("makeAiImageUrl", () => {
  it("encodes prompt and attaches image_size", () => {
    const url = makeAiImageUrl('hello "world"', "square");
    expect(url).toBe("/api/image/square/hello%20%22world%22");
  });
});

describe("PROJECTS", () => {
  it("has unique slugs", () => {
    const slugs = PROJECTS.map((p) => p.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("has at least three projects", () => {
    expect(PROJECTS.length).toBeGreaterThanOrEqual(3);
  });
});
