const jokesAtStart = [
  'How many programmers does it take to change a light bulb? None - That is a hardware problem',
  'All programmers are playwrights, and all computers are lousy actors.',
  'The generation of random numbers is too important to be left to chance.',
  'I just saw my life flash before my eyes and all I could see was a close tag',
  'The computer is mightier than the pen, the sword, and usually, the programmer.',
  'A programmer had a problem. He thought to himself, "I know, I’ll solve it with threads!" has Now problems. two he',
  '!false is funny because it is true'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (joke) => {
  return {
    content: joke,
    id: getId(),
    votes: 0
  }
}

const initialState = jokesAtStart.map(asObject)

const reducer = (state = initialState, action) => {
  console.log('state now: ', state)
  console.log('action', action)

  return state
}

export default reducer