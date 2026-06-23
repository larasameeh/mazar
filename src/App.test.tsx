import { render, screen, within } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
}

describe("App", () => {
  beforeEach(() => {
    vi.stubGlobal("IntersectionObserver", MockIntersectionObserver);
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("places walkthrough first, 360 experience second, and removes section description copy", () => {
    render(<App />);

    const nav = screen.getByRole("navigation", { name: "Primary navigation" });
    const navLinks = within(nav).getAllByRole("link");
    const walkthrough = screen.getByRole("region", { name: "Museum Walkthrough" });
    const panorama = screen.getByRole("region", { name: "Enter the exhibition hall in 360 immersive experience" });
    const exterior = screen.getByRole("region", { name: "Exterior Shots" });
    const video = screen.getByTitle("MAZAR museum walkthrough video");

    expect(navLinks.map((link) => link.textContent)).toEqual([
      "Museum Walkthrough",
      "360 Experience",
      "Exterior",
      "Interior",
      "Banner",
      "Contact"
    ]);
    expect(walkthrough.compareDocumentPosition(panorama) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    expect(panorama.compareDocumentPosition(exterior) & Node.DOCUMENT_POSITION_FOLLOWING).not.toBe(0);
    expect(video.getAttribute("src")).toBe("https://www.youtube.com/embed/o2o0bFeJtQI");
    expect(screen.queryByText("A full video route through the MAZAR Maritime Museum experience.")).toBeNull();
    expect(screen.queryByText("Arrival views, roof studies, public edges, and waterfront moments.")).toBeNull();
    expect(screen.queryByText("The main hall sequence, ready to expand as more interior renders are added.")).toBeNull();
  });
});
