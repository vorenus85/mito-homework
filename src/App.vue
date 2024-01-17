<template>
  <div id="app">
    <Scratchable
      class="scratch-wrapper"
      @percentageUpdated="percentageUpdated($event)"
    />
    <Deck class="deck-wrapper" />
    <BonusDeck class="bonus-deck-wrapper" />
  </div>
</template>

<script>
import BonusDeck from "./components/BonusDeck.vue";
import Deck from "./components/Deck.vue";
import Scratchable from "./components/Scratchable.vue";
export default {
  name: "App",
  // components: { MyScratchable },
  components: { Deck, BonusDeck, Scratchable },
  data() {
    return {
      scratchCompleted: false,
    };
  },
  methods: {
    percentageUpdated(percentage) {
      if (percentage > 90) {
        this.scratchCompleted = true;
      }
    },
  },
};
</script>

<style lang="css">
@import url("./assets/css/normalize.css");
#app {
  text-align: center;
  color: #000;
  background: #000 url("./assets/svg/background.svg");
  max-width: 442px;
  min-height: 782px;
  margin: 0 auto;
  position: relative;
  padding-top: 350px;
}

.scratch-wrapper {
  z-index: 10;
}

.deck-wrapper {
  z-index: 9;
}

.bonus-deck-wrapper {
  z-index: 9;
}
</style>
