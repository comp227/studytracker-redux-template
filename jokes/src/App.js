import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  const jokes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    console.log('vote', id)
  }

  return (
    <div>
      <h2>Jokes</h2>
      {jokes.map(joke =>
        <div key={joke.id}>
          <div>
            {joke.content}
          </div>
          <div>
            has {joke.votes}
            <button onClick={() => vote(joke.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form>
        <div><input /></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App