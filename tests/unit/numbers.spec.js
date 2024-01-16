import { deckNumbers } from "@/numbers";

describe("Numbers test:", () => {
  it("should number array length to be 20, because the lowest card is two", () => {
    // Arrange
    const numbersArray = deckNumbers;

    expect(numbersArray.length).toBe(20);
  });
});
