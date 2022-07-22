<template>
  <div
    class="cell"
    :class="{'cell--white': isWhite, 'cell--black': !isWhite}"
  >

  </div>
</template>

<script>
export default {
  name: "TheCell",
  props: {
    position: {
      type: Object,
      required: true,
    },
    isWhite: {
      type: Boolean,
      required: true,
    },
    figure: {
      type: Object,
      default: () => ({}),
      required: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.cell {
  display: block;
  width: 10vh;
  height: 10vh;

  &--white {
    background-color: white;
  }

  &--black {
    background-color: black;
  }
}
</style>
