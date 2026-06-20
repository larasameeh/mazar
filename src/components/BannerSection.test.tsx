import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BannerSection } from "./BannerSection";

describe("BannerSection", () => {
  it("uses a section-level title and keeps the card body free of duplicate headings", () => {
    render(<BannerSection config={{ previewImage: "", pdf: "", jpg: "", externalLink: "" }} />);

    const heading = screen.getByRole("heading", { name: "Presentation board", level: 2 });

    expect(screen.getByRole("region", { name: "Presentation board" })).toBeTruthy();
    expect(heading.closest(".section__header")).toBeTruthy();
    expect(document.querySelector(".banner-content h2")).toBeNull();
    expect(screen.getByText("Graduation Banner")).toBeTruthy();
    expect(screen.getAllByText("Presentation board")).toHaveLength(2);
  });
});
