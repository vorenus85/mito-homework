<template>
  <div class="deck d-flex flex-column container-fluid">
    <div class="row">
      <div class="col-4">
        <hand class="hand-1 ps-2 pt-2" :hand="hand1" />
      </div>
      <div class="col-4">
        <div class="prize pt-2">
          <span class="prize-number"
            >{{ prize.number | thousandSeparator }} Ft</span
          >
          <span class="prize-text">{{ prize.text }}</span>
        </div>
        <hand class="dealer pt-2" :hand="dealer" />
      </div>
      <div class="col-4"><hand class="hand-3 pe-2 pt-2" :hand="hand3" /></div>
    </div>
    <div class="row pt-3">
      <div class="col-4 ps-4"><hand class="hand-2 ps-5" :hand="hand2" /></div>
      <div class="col-4"></div>
      <div class="col-4 pe-4"><hand class="hand-4 pe-5" :hand="hand4" /></div>
    </div>
  </div>
</template>
<script>
import Hand from "./Hand.vue";
import mixins from "@/mixins";
import { deckNumbers, winScenarios } from "@/numbers";
export default {
  components: { Hand },
  mixins: [mixins],
  filters: {
    thousandSeparator(value) {
      if (typeof value !== "number") {
        return value;
      }

      const numberString = value.toString();

      return numberString.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    },
  },
  data() {
    return {
      deckNumbers,
      deckWin: false,
      prize: {
        number: 15000000,
        text: "Tizenötmillió",
      },
      dealer: { number: "", text: "" },
      hand1: { number: "", text: "" },
      hand2: { number: "", text: "" },
      hand3: { number: "", text: "" },
      hand4: { number: "", text: "" },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initDeck();
    });
  },
  methods: {
    playerWinScenario() {
      this.dealer = this.generateHandLessThan17();
      // player get two-two card by hand so hand lowest value will 4
      const [, , ...remaining] = this.deckNumbers;

      /**
       * 0 - 25 hand1 is fix winner
       * 25 - 50 hand2 is fix winner
       * 50 - 75 hand3 is fix winner
       * 75 - 100 hand4 is fix winner
       */
      const winnerHand = Math.random() * 100;

      this.hand1 = this.getPlayerHandIfPlayerWin(winnerHand, 25);
      this.hand2 = this.getPlayerHandIfPlayerWin(winnerHand, 50);
      this.hand3 = this.getPlayerHandIfPlayerWin(winnerHand, 75);
      this.hand4 =
        winnerHand >= 75
          ? this.generateHandMoreThan17()
          : this.getRandomHand(remaining);
    },
    getPlayerHandIfPlayerWin(score, threshold) {
      // player get two-two card by hand so hand lowest value will 4
      const [, , ...remaining] = this.deckNumbers;
      return score <= threshold
        ? this.generateHandMoreThan17()
        : this.getRandomHand(remaining);
    },
    playerLooseScenario() {
      this.dealer = this.generateHandMoreThan17();
      this.hand1 = this.generateHandLessThan17();
      this.hand2 = this.generateHandLessThan17();
      this.hand3 = this.generateHandLessThan17();
      this.hand4 = this.generateHandLessThan17();
    },
    generateHandMoreThan17() {
      // player get two-two card by hand so hand lowest value will 4
      const [, , ...remaining] = this.deckNumbers;
      const winnerDeck = remaining.slice(14);
      return this.getRandomHand(winnerDeck);
    },
    generateHandLessThan17() {
      // player get two-two card by hand so hand lowest value will 4
      const [, , ...remaining] = this.deckNumbers;
      const looserDeck = remaining.slice(0, 13);
      return this.getRandomHand(looserDeck);
    },
    setPrize(scenario) {
      this.prize = scenario;
    },
    calcPlayerIsWinOnMainDeck() {
      return Math.random() * 100;
    },
    initDeck() {
      const score = this.calcPlayerIsWinOnMainDeck();

      this.getRandomPrize(score);

      if (score <= 30) {
        this.playerWinScenario();
      } else {
        this.playerLooseScenario();
      }
    },
    getRandomPrize(score) {
      const thresholds = Object.keys(winScenarios);
      const thresholdIndex = thresholds.findIndex(
        (threshold) => score <= threshold
      );

      if (score <= 30) {
        const winScenarioKey = thresholds[thresholdIndex];
        this.setPrize(winScenarios[winScenarioKey]);
        this.$store.dispatch("setMainDeckIsWin", true);
        this.$store.dispatch(
          "setMainDeckPrize",
          winScenarios[winScenarioKey].number
        );
      }
    },
  },
};
</script>
<style lang="scss">
.deck {
  font-family: "Inconsolata", sans-serif;
  height: 180px;
  position: relative;
  font-size: 15px;
  line-height: 10px;
  text-align: center;
}

.prize {
  font-weight: 700;
  line-height: 10px;

  &-number {
    display: block;
  }

  &-text {
    display: block;
    text-transform: uppercase;
    padding-top: 2px;
    font-size: 12px;
  }
}

.hand {
  &.dealer {
    .hand-number {
      font-family: "Roboto Mono", sans-serif;
    }
  }
}
</style>
