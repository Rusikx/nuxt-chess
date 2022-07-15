export default {
  SET_DATA: (state, value) => {
    state.data = value
  },
  SET_MOVE: (state, value) => {
    state.active[value.x][value.y] = state.active[value.a][value.b]
  },
}
