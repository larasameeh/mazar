import { describe, expect, it } from "vitest";
import { getContactActions } from "./contact";

describe("getContactActions", () => {
  it("returns only CV actions with available values", () => {
    const actions = getContactActions({
      email: "hello@example.com",
      linkedin: "https://linkedin.com/in/example",
      phone: "",
      cvDownload: "/downloads/cv.pdf",
      cvOnline: ""
    });

    expect(actions.map((action) => action.label)).toEqual(["Download CV"]);
  });
});
