import { useState } from 'react'
import './App.css'

function App() {
  const [] = useState(0)

  useEffect(() => {
    const buscarRepositorios = async () => {
        const response = await fetch('https://opentdb.com/api.php?amount=30&category=15 ')
        const data = await response.json()
        setRepositories(data)
    }
    buscarRepositorios()
}, [])


return (
  <section className={styles.jogos}>
      <h2>JOGOS</h2>
      {
          repositories.length > 0 ? (
              <section className={styles.jogos}>
                  {
                      repositories.map((repo) => (
                          <Card
                              key={repo.id}
                              name={repo.name}
                              description={repo.description}
                              html_url={repo.html_url}
                          />
                      ))
                  }
              </section>
          ) : (
              <p>Carregando JOGOS...</p>
          )
      }
  </section>
)
}

export default App
