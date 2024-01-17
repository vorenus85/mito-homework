import { deckNumbers, handNumbers } from "@/numbers";

describe("Numbers test:", () => {
  it("should deckNumbers array length to be 20, because the lowest card is two", () => {
    // Arrange
    const numbersArray = deckNumbers;

    expect(numbersArray.length).toBe(20);
  });

  it("should handNumbers array length to be 10, because the lowest card is two", () => {
    // Arrange
    const numbersArray = handNumbers;

    expect(numbersArray.length).toBe(10);
  });
});
