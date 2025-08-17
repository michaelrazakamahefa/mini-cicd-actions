import { describe, it, expect } from "vitest";
import { somme } from "./utils.js";

describe("somme()", () => {
  it("additionne deux nombres", () => {
    expect(somme(2, 3)).toBe(5);
  });

  it("gère les chaînes de caractères numériques", () => {
    expect(somme("10", "7")).toBe(17);
  });
});
