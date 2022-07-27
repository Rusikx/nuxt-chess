<template>
  <div class="figure" @click="move">
    <img
      v-if="code"
      :src="`../../static/figures/${figureUrl}`"
      alt=""
    >
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
    position: {
      type: Object,
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
  computed: {
    figureUrl() {
      return this.figures[this.code]?.url?.white
    },
    rememberPosition() {
      return this.$store.getters['board/remember']
    },
    firstClick() {
      return this.$store.getters['board/firstClick']
    },
  },
  methods: {
    move() {
      if (this.firstClick) {
        this.$store.commit('board/SET_REMEMBER_POSITION', {
          a: this.position.i,
          b: this.position.j,
        })
      } else {
        this.$store.commit('board/SET_MOVE', {
          x: this.position.i,
          y: this.position.j,
          a: this.rememberPosition.a,
          b: this.rememberPosition.b,
        })
      }

      this.$store.commit('board/SET_FIRST_CLICK', !this.firstClick)
    },
  },
}
</script>

<style scoped lang="scss">
.figure {
  width: 100%;
  height: 100%;
}
</style>
