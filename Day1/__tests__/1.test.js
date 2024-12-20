const { findTotalDifference, findSimilarityScore } = require("../Coding/1.js");

describe("findDifferenceBetween", () => {
  it("should return 0 if arrays are empty", () => {
    expect(findTotalDifference([], [])).toBe(0);
  });

  it("should return the total difference when given two arrays with one element each", () => {
    expect(findTotalDifference([1], [2])).toBe(1);
  });

  it("should return the total difference when given two arrays with multiple sorted elements", () => {
    expect(findTotalDifference([1, 2, 3], [3, 5, 7])).toBe(9);
  });

  it("should return the total difference when given two arrays with multiple unsorted elements", () => {
    expect(findTotalDifference([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3])).toBe(
      11
    );

    expect(findTotalDifference([5, 9, 10, 2, 6], [1, 5, 90, 6, 45])).toBe(117);
  });

  it("should not mutate the passed in arrays", () => {
    const input1 = [10, 1, 70, 2];
    const input2 = [11, 3, 8, 1];

    findTotalDifference(input1, input2);

    expect(input1).toEqual([10, 1, 70, 2]);
    expect(input2).toEqual([11, 3, 8, 1]);
  });
});

describe("findSimilarities", () => {
  it("should return 0 if arrays are empty", () => {
    expect(findSimilarityScore([], [])).toBe(0);
  });

  it("should return 0 if element in first array is not repeated", () => {
    expect(findSimilarityScore([1], [2])).toBe(0);
  });

  it("should return the correct score when one element is repeated", () => {
    expect(findSimilarityScore([2], [1, 2, 2])).toBe(4);
  });

  it("should return the correct score when multiple elements are repeated", () => {
    expect(findSimilarityScore([3, 4, 2, 1, 3, 3], [4, 3, 5, 3, 9, 3])).toBe(
      31
    );
  });

  it("should not mutate the passed in arrays", () => {
    const input1 = [10, 1, 70, 2];
    const input2 = [11, 1, 2, 1];

    findSimilarityScore(input1, input2);

    expect(input1).toEqual([10, 1, 70, 2]);
    expect(input2).toEqual([11, 1, 2, 1]);
  });
});
