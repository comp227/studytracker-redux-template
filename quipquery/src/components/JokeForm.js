const JokeForm = () => {

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.joke.value
    event.target.joke.value = ''
    console.log('new joke')
}

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='joke' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default JokeForm
