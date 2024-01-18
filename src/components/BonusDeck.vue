<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-6"></div>
      <div class="col-6">
        <div class="bonus-deck deck pe-3">
          <div class="row pt-4">
            <div class="col-6 text-uppercase pt-4 ps-5">
              <div class="bonus-deck-text pt-2">Bónusz-játék</div>
            </div>
            <div class="col-6 pt-3 pe-5">
              <hand class="hand-1" :hand="hand1" />
            </div>
          </div>
          <div class="row pt-1">
            <div class="col-6 ps-5"><hand class="hand-2" :hand="hand2" /></div>
            <div class="col-6 pe-5"><hand class="hand-3" :hand="hand3" /></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Hand from "./Hand.vue";
import mixins from "@/mixins";
import { handNumbers } from "@/numbers";
export default {
  components: { Hand },
  mixins: [mixins],
  data() {
    return {
      bonusDeck: [],
      handNumbers,
      hand1: { number: "", text: "" },
      hand2: { number: "", text: "" },
      hand3: { number: "", text: "" },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initBonusDeck();
    });
  },
  methods: {
    initBonusDeck() {
      const bonusDeckWin = this.generateBonusDeckChance();

      if (bonusDeckWin) {
        this.bonusDeck = this.generateNumbersWithSum21();
        this.$store.dispatch("setBonusDeckIsWin", true);
        this.$store.dispatch("setBonusDeckPrize", 1000);
      } else {
        this.bonusDeck = this.generateNumbersNotEqual21();
      }

      const card1 = this.bonusDeck[0];
      const card2 = this.bonusDeck[1];
      const card3 = this.bonusDeck[2];

      this.hand1 = this.findCardByNumber(card1, handNumbers);
      this.hand2 = this.findCardByNumber(card2, handNumbers);
      this.hand3 = this.findCardByNumber(card3, handNumbers);
    },
    generateBonusDeckChance() {
      const randomValue = Math.random();
      return randomValue < 0.5;
    },
    generateRandomCard2To11() {
      return Math.floor(Math.random() * 10) + 2;
    },
    generateNumbersWithSum21() {
      let sum = 21;
      let randomNumber1, randomNumber2, randomNumber3;
      do {
        randomNumber1 = this.generateRandomCard2To11();
        randomNumber2 = this.generateRandomCard2To11();
        randomNumber3 = this.generateRandomCard2To11();
      } while (randomNumber1 + randomNumber2 + randomNumber3 !== sum);

      return [randomNumber1, randomNumber2, randomNumber3];
    },
    generateNumbersNotEqual21() {
      let sum = 21;
      let randomNumber1, randomNumber2, randomNumber3;
      do {
        randomNumber1 = this.generateRandomCard2To11();
        randomNumber2 = this.generateRandomCard2To11();
        randomNumber3 = this.generateRandomCard2To11();
      } while (randomNumber1 + randomNumber2 + randomNumber3 === sum);

      return [randomNumber1, randomNumber2, randomNumber3];
    },
  },
};
</script>
<style lang="scss">
.bonus-deck-text {
  hyphens: auto;
  font-size: 12px;
  line-height: 10px;
}
</style>
