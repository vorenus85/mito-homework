export default {
  methods: {
    findCardByNumber(numberToFind, deck) {
      const foundItem = deck.find(
        (item) => Object.keys(item)[0] == numberToFind
      );

      let card = { number: "", text: "" };

      if (foundItem) {
        card = {
          number: numberToFind,
          text: foundItem[numberToFind],
        };
      } else {
        console.log(`Number ${numberToFind} not found in the array.`);
      }
      return card;
    },
    getRandomHand(array) {
      const hand = array[Math.floor(Math.random() * array.length)];
      let result = { number: "", text: "" };

      if (hand) {
        const handNumber = Object.keys(hand)[0];
        const handText = Object.values(hand)[0];
        result = { number: handNumber, text: handText };
      }
      return result;
    },
  },
};
