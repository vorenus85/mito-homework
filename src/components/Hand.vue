<template>
  <div class="hand">
    <span class="hand-number">{{ handNumber }}</span>
    <span class="hand-text">{{ handText }}</span>
  </div>
</template>
<script>
export default {
  name: "Hand",
  props: {
    hand: {
      type: Object,
      default: () => {
        return {
          number: "",
          text: "",
        };
      },
    },
  },
  computed: {
    handNumber() {
      return this.hand?.number;
    },
    handText() {
      return this.hand?.text;
    },
  },
};
</script>
<style lang="scss">
.hand {
  font-weight: 700;

  &-number {
    font-size: 40px;
    line-height: 40px;
    display: block;
  }

  &-text {
    font-size: 15px;
    line-height: 10px;
    display: block;
    text-transform: uppercase;
  }
}
</style>
