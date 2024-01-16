<template>
  <div class="deck">
    <div class="prize">
      <span class="prize-number">{{ prize?.number }} Ft</span>
      <span class="prize-text">{{ prize?.text }}</span>
    </div>
    <hand class="dealer" :hand="dealer" />
    <hand class="hand-1" :hand="hand1" />
    <hand class="hand-2" :hand="hand2" />
    <hand class="hand-3" :hand="hand3" />
    <hand class="hand-4" :hand="hand4" />
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
  position: absolute;
  line-height: 10px;
  width: 150px;
  top: 10px;
  left: calc(50% - 75px);

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
    top: 40px;
    left: calc(50% - 35px);

    .hand-number {
      font-family: "Roboto Mono", sans-serif;
    }
  }

  &-1 {
    top: 5px;
    left: 45px;
  }

  &-2 {
    top: 5px;
    right: 45px;
  }

  &-3 {
    top: 110px;
    left: 75px;
  }

  &-4 {
    top: 110px;
    right: 75px;
  }
}
</style>
