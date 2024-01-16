<template>
  <div id="app">
    <Deck />
    <BonusDeck />
  </div>
</template>

<script>
import BonusDeck from "./components/BonusDeck.vue";
import Deck from "./components/Deck.vue";
// import MyScratchable from "./components/Scratchable.vue";
export default {
  name: "App",
  // components: { MyScratchable },
  components: { Deck, BonusDeck },
};
</script>

<style lang="css">
@import url("./assets/css/normalize.css");
#app {
  text-align: center;
  color: #000;
  background: #000 url("./assets/svg/background.svg");
  width: 442px;
  height: 782px;
  margin: 0 auto;
  position: relative;
  padding-top: 350px;
}
</style>
