import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";

export function Footer(){
    return (
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
    )
}