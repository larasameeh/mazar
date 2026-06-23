import { describe, expect, it } from "vitest";
import { exteriorImages, interiorImages, panoramaHotspots, panoramaMapImage } from "./site";

function expectGalleryImages(
  images: Array<{ id: string; src: string; thumb: string }>,
  gallery: "exterior" | "interior",
  prefix: "ext" | "int",
  count: number
) {
  expect(images).toHaveLength(count);
  expect(
    images.map(({ id, src, thumb }) => ({
      id,
      src,
      thumb
    }))
  ).toEqual(
    Array.from({ length: count }, (_, index) => {
      const imageNumber = String(index + 1).padStart(2, "0");

      return {
        id: `${gallery}-${imageNumber}`,
        src: expect.stringMatching(new RegExp(`/images/${gallery}/${prefix}-${imageNumber}-gallery\\.webp$`)),
        thumb: expect.stringMatching(new RegExp(`/images/${gallery}/thumbnails/${prefix}-${imageNumber}-gallery\\.webp$`))
      };
    })
  );
}

describe("exterior gallery content", () => {
  it("uses the processed current exterior gallery images and thumbnails", () => {
    expectGalleryImages(exteriorImages, "exterior", "ext", 8);
  });
});

describe("interior gallery content", () => {
  it("uses the processed current interior gallery images and thumbnails", () => {
    expectGalleryImages(interiorImages, "interior", "int", 7);
  });
});

describe("panorama content", () => {
  it("uses the final 360 map and six processed panorama scenes", () => {
    expect(panoramaMapImage).toMatch(/\/images\/360\/base\.webp$/);
    expect(
      panoramaHotspots.map(({ id, x, y, panorama }) => ({
        id,
        x,
        y,
        panorama
      }))
    ).toEqual([
      {
        id: "underwaters",
        x: 8.5526,
        y: 55.4729,
        panorama: expect.stringMatching(/\/images\/360\/underwaters\.png$/)
      },
      {
        id: "circle",
        x: 17.9426,
        y: 71.7322,
        panorama: expect.stringMatching(/\/images\/360\/circle\.png$/)
      },
      {
        id: "hologram",
        x: 31.6986,
        y: 56.3231,
        panorama: expect.stringMatching(/\/images\/360\/hologram\.png$/)
      },
      {
        id: "statue",
        x: 41.866,
        y: 49.9469,
        panorama: expect.stringMatching(/\/images\/360\/statue\.png$/)
      },
      {
        id: "tree",
        x: 48.445,
        y: 42.508,
        panorama: expect.stringMatching(/\/images\/360\/tree\.png$/)
      },
      {
        id: "movies",
        x: 59.8086,
        y: 47.8215,
        panorama: expect.stringMatching(/\/images\/360\/movies\.png$/)
      }
    ]);
  });
});
