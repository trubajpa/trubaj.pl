import { FormEvent, useState } from 'react'

const CORRECT_PASSWORD = 'test123'

function App() {
  const [password, setPassword] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (password === CORRECT_PASSWORD) {
      setIsLoggedIn(true)
      setError('')
      return
    }

    setError('Błędne hasło. Spróbuj ponownie.')
  }

  return (
    <main className="card">
      {isLoggedIn ? (
        <section>
          <h1>Witaj na trubaj.pl</h1>
          <p>To jest strona powitalna dostępna po wpisaniu poprawnego hasła.</p>
        </section>
      ) : (
        <section>
          <h1>trubaj.pl</h1>
          <p>Podaj hasło, aby wejść na stronę.</p>
          <form onSubmit={handleSubmit}>
            <label className="visually-hidden" htmlFor="password">
              Hasło
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Hasło"
              autoComplete="current-password"
              autoFocus
            />
            <button type="submit">Wejdź</button>
            <p className="error" role="alert" aria-live="polite">
              {error}
            </p>
          </form>
        </section>
      )}
    </main>
  )
}

export default App
