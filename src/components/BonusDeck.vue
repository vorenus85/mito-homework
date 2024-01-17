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
import { deckNumbers } from "@/numbers";
export default {
  components: { Hand },
  mixins: [mixins],
  data() {
    return {
      deckNumbers,
      hand1: { number: "", text: "" },
      hand2: { number: "", text: "" },
      hand3: { number: "", text: "" },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.hand1 = this.getRandomHand(this.deckNumbers);
      this.hand2 = this.getRandomHand(this.deckNumbers);
      this.hand3 = this.getRandomHand(this.deckNumbers);
    });
  },
  methods: {
    generateNumbersWithSum21() {
      const randomNumber1 = Math.floor(Math.random() * 10) + 1;
      const randomNumber2 =
        Math.floor(Math.random() * (21 - randomNumber1)) + 1;
      const randomNumber3 = 21 - randomNumber1 - randomNumber2;

      return [randomNumber1, randomNumber2, randomNumber3];
    },
    generateNumbersNotEqual21() {
      let sum = 21;

      // Generate random numbers until the sum is not equal to 21
      let randomNumber1, randomNumber2, randomNumber3;
      do {
        randomNumber1 = Math.floor(Math.random() * 10) + 1;
        randomNumber2 = Math.floor(Math.random() * 10) + 1;
        randomNumber3 = Math.floor(Math.random() * 10) + 1;
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
