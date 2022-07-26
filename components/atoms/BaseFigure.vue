<template>
  <div class="figure">
    <img src="~/static/figures/bishop-white.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'BaseFigure',
  props: {
    code: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      figures: {
        1: {
          code: 'pawn',
          name: 'Пешка',
          url: {
            white: 'pawn-white.png',
            black: 'pawn-black.png',
          },
        },
        2: {
          code: 'bishop',
          name: 'Слон',
          url: {
            white: 'bishop-white.png',
            black: 'bishop-white.png',
          },
        },
        3: {
          code: 'knight',
          name: 'Конь',
          url: {
            white: 'knight-white.png',
            black: 'knight-white.png',
          },
        },
        4: {
          code: 'rook',
          name: 'Ладья',
          url: {
            white: 'rook-white.png',
            black: 'rook-white.png',
          },
        },
        5: {
          code: 'queen',
          name: 'Королева',
          url: {
            white: 'queen-white.png',
            black: 'queen-white.png',
          },
        },
        6: {
          code: 'king',
          name: 'Король',
          url: {
            white: 'king-white.png',
            black: 'king-white.png',
          },
        },
      },
    }
  },
}
</script>

<style scoped>

</style>
