import { Header } from "./components/Header"
import { Main } from "./components/Main"
import { Footer } from "./components/Footer"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <div>
      <Header/>
      <Main bgVariant="index"/>
      <Footer/>

      <GlobalStyle />
    </div>
  )
}

export default App
