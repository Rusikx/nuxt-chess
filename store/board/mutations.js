export default {
  SET_DATA: (state, value) => {
    state.data = value
  },
  SET_MOVE: (state, value) => {
    const duplicate = JSON.parse(JSON.stringify(state.active))
    duplicate[value.x][value.y] = duplicate[value.a][value.b]
    duplicate[value.a][value.b] = 0

    state.active = duplicate
  },
  SET_REMEMBER_POSITION: (state, value) => {
    state.remember = value
  },
  SET_FIRST_CLICK: (state, value) => {
    state.firstClick = value
  },
}
