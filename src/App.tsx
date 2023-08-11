import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react"
import styles from "./App.module.css"

function App() {
  return (
    <div className="app">
      <header>
        <nav className={styles.header}>
          <span>Lacrei</span>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Pessoa Usuária</a></li>
            <li><a href="">Profissional</a></li>
          </ul>
        </nav>
      </header>

      <section>
        <div>
          <h1>Boas Vindas a Lacrei Saúde</h1>
          <p>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</p>
          <div className="btnWrapper">
            <button>Pessoa Usuária</button>
            <button>Profissional</button>
          </div>
        </div>
      </section>

      <footer>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Pessoa Usuária</a></li>
          <li><a href="">Profissional</a></li>
        </ul>
        <div>
          <FacebookLogo size={32} color="#018762"/>
          <InstagramLogo size={32} color="#018762"/>
          <LinkedinLogo size={32} color="#018762"/>
        </div>
        <p>Desafio Front-end Lacrei</p>
      </footer>
    </div>
  )
}

export default App
