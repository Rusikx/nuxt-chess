<template>
  <div class="board">
    <TheCell
      v-for="(cell, key) in COUNT_CELL"
      :key="key"
      :position="key"
      :is-white="key % 2 === 0"
    />
  </div>
</template>

<script>
import TheCell from "../organisms/TheCell";

export default {
  name: "TheBoard",
  components: {
    TheCell,
  },
  data() {
    return {
      COUNT_CELL: 64,
    }
  },
  methods: {
  },
}
</script>

<style scoped>
.board {
  display: grid;
  /*grid-row: 6;*/
  /*grid-template-rows: 80vw;*/
  grid-template-columns: repeat(8, 10vw);
  grid-template-rows: repeat(8, 10vh);
  width: 80vw;
  height: 80vh;
  background-color: aqua;
}
</style>
