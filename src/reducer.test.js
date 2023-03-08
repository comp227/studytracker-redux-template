import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('studytracker reducer', () => {
  const initialState = {
    yeah: 0,
    kinda: 0,
    nah: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('yeah is incremented', () => {
    const action = {
      type: 'YEAH'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      yeah: 1,
      kinda: 0,
      nah: 0
    })
  })
})
