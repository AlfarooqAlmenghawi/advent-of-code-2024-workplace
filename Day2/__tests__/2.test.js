const { safeChecker } = require("../Coding/2.js");

describe("safeChecker", () => {
  it("checks the safety of a single array with a single nested array of numbers", () => {
    const array = [[3, 4, 5, 9]];

    expect(safeChecker(array)).toBe(1);
  });
});
