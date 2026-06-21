import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BannerSection } from "./BannerSection";

describe("BannerSection", () => {
  it("uses a section-level title and keeps the card body free of duplicate headings", () => {
    render(<BannerSection config={{ previewImage: "", fullImage: "", pdf: "", jpg: "", externalLink: "" }} />);

    const heading = screen.getByRole("heading", { name: "Presentation board", level: 2 });

    expect(screen.getByRole("region", { name: "Presentation board" })).toBeTruthy();
    expect(heading.closest(".section__header")).toBeTruthy();
    expect(document.querySelector(".banner-content h2")).toBeNull();
    expect(screen.getByText("Graduation Banner")).toBeTruthy();
    expect(screen.getAllByText("Presentation board")).toHaveLength(2);
  });

  it("puts the Drive button beside the title and the fullscreen control on the preview", () => {
    render(
      <BannerSection
        config={{
          previewImage: "/images/banner/banner-preview.webp",
          fullImage: "/images/banner/banner-full.webp",
          pdf: "",
          jpg: "",
          externalLink: "https://drive.google.com/drive/folders/example"
        }}
      />
    );

    const heading = screen.getByRole("heading", { name: "Presentation board", level: 2 });
    const driveLink = screen.getByRole("link", { name: /View project files/i });
    const fullscreenLink = screen.getByRole("link", { name: /Open full-resolution presentation board/i });

    expect(screen.getByRole("img", { name: "Preview of MAZAR graduation banner" }).getAttribute("src")).toBe(
      "/images/banner/banner-preview.webp"
    );
    expect(screen.getAllByRole("link")).toHaveLength(2);
    expect(driveLink.getAttribute("href")).toBe("https://drive.google.com/drive/folders/example");
    expect(driveLink.closest(".banner-title-row")?.contains(heading)).toBe(true);
    expect(driveLink.querySelector(".drive-mark")).toBeTruthy();
    expect(fullscreenLink.getAttribute("href")).toBe("/images/banner/banner-full.webp");
    expect(fullscreenLink.closest(".banner-preview")).toBeTruthy();
    expect(screen.queryByText(/lightweight board preview/i)).toBeNull();
    expect(screen.queryByRole("link", { name: /Open full board/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /Download PDF/i })).toBeNull();
    expect(screen.queryByRole("link", { name: /Download JPG/i })).toBeNull();
  });
});
