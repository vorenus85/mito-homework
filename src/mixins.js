export default {
  methods: {
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
