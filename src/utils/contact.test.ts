import { describe, expect, it } from "vitest";
import { getContactActions } from "./contact";

describe("getContactActions", () => {
  it("returns a single view action for the configured CV", () => {
    const actions = getContactActions({
      email: "hello@example.com",
      linkedin: "https://linkedin.com/in/example",
      phone: "",
      cvDownload: "/downloads/cv.pdf",
      cvOnline: ""
    });

    expect(actions).toEqual([
      {
        href: "/downloads/cv.pdf",
        label: "View Lara's CV",
        external: true
      }
    ]);
  });
});
