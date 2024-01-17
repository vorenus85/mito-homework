<template>
  <div class="scratch">
    <vue-scratchable
      v-slot="{ init }"
      :brushOptions="brush"
      :hideOptions="hide"
      getPercentageCleared
      @percentageUpdate="updatePoints"
    >
      <div class="wrapper">
        <img
          :src="require('./../assets/svg/deck.svg')"
          @load="init()"
          alt="Black Jack Deck"
        />
      </div>
    </vue-scratchable>
  </div>
</template>
<script>
import VueScratchable from "vue-scratchable";
import paperPattern from "./../assets/svg/scratch.svg";

export default {
  name: "Scratchable",
  components: { VueScratchable },
  data() {
    return {
      percentage: 0,
      hide: {
        type: "pattern",
        src: paperPattern,
        repeat: "no-repeat",
      },
      brush: {
        size: 64,
        shape: "round",
      },
    };
  },
};
</script>
<style>
.scratch {
  width: 394px;
  height: 431px;
  position: absolute;
  bottom: 24px;
  left: 24px;
}
</style>
