<template>
  <div class="deck d-flex flex-column container-fluid">
    <div class="row">
      <div class="col-4">
        <hand class="hand-1 ps-2 pt-2" :hand="hand1" />
      </div>
      <div class="col-4">
        <div class="prize pt-2">
          <span class="prize-number">{{ prize?.number }} Ft</span>
          <span class="prize-text">{{ prize?.text }}</span>
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
import { deckNumbers } from "@/numbers";
export default {
  components: { Hand },
  mixins: [mixins],
  data() {
    return {
      deckNumbers,
      prize: {},
      dealer: { number: "", text: "" },
      hand1: { number: "", text: "" },
      hand2: { number: "", text: "" },
      hand3: { number: "", text: "" },
      hand4: { number: "", text: "" },
    };
  },
  mounted() {
    this.$nextTick(() => {
      // player get two-two card by hand so hand lowest value will 4
      const [, , ...remaining] = this.deckNumbers;
      this.prize = this.getRandomPrize();
      this.dealer = this.getRandomHand(remaining);
      this.hand1 = this.getRandomHand(remaining);
      this.hand2 = this.getRandomHand(remaining);
      this.hand3 = this.getRandomHand(remaining);
      this.hand4 = this.getRandomHand(remaining);
    });
  },
  methods: {
    getRandomPrize() {
      return { number: "100 000", text: "Százezer" };
    },
  },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@700&family=Roboto+Mono:wght@700&display=swap");
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
