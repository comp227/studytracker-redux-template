const initialState = {
  yeah: 0,
  kinda: 0,
  nah: 0
}

const counterReducer = (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case 'YEAH':
      return state
    case 'KINDA':
      return state
    case 'NAH':
      return state
    case 'ZERO':
      return state
    default: return state
  }

}

export default counterReducer
