// testing setup via:
// https://www.robinwieruch.de/vitest-react-testing-library/

import { describe, it, expect } from "vitest";

describe("something truthy and falsy", () => {
    it("true to be true", () => {
        expect(true).toBe(true);
    });
    it("false to be false", () => {
        expect(false).toBe(false);
    });
});
