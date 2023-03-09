import JokeForm from './components/JokeForm'
import Notification from './components/Notification'

const App = () => {

  const handleVote = (anecdote) => {
    console.log('vote')
  }

  const jokes = [
    {
      "content": "!false is funny because it is true",
      "id": "47145",
      "votes": 0
    },
  ]

  return (
    <div>
      <h3>Anecdote app</h3>

      <Notification />
      <JokeForm />

      {jokes.map(joke =>
        <div key={joke.id}>
          <div>
            {joke.content}
          </div>
          <div>
            has {joke.votes}
            <button onClick={() => handleVote(joke)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
