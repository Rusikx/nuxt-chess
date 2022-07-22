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

<style scoped>
.cell {
  display: block;
  width: 10vh;
  height: 10vh;
}

.cell--white {
   background-color: white;
 }

.cell--black {
   background-color: black;
 }
</style>
