// import { Header } from "./components/Header"
// import { Main } from "./components/Main"
// import { Footer } from "./components/Footer"
import { Router } from "./Router"
import {BrowserRouter} from "react-router-dom"
import { GlobalStyle } from "./styles/global"

function App() {
  return (
    <div>
      {/* <Header/>
      <Main bgVariant="index"/>
      <Footer/> */}
      <BrowserRouter>
        <Router />
        <GlobalStyle />
      </BrowserRouter>
    </div>
  )
}

export default App
