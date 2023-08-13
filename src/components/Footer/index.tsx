import { FacebookLogo, InstagramLogo, LinkedinLogo } from "@phosphor-icons/react";
import { FooterContainer, ListContainer, ListItemContainer, LinkContainer, DivContainer, ParagraphContainer} from "./index.styles";

export function Footer(){
    return (
        <FooterContainer>
        <ListContainer>
          <ListItemContainer><LinkContainer href="/">Home</LinkContainer></ListItemContainer>
          <ListItemContainer><LinkContainer href="/user">Pessoa Usuária</LinkContainer></ListItemContainer>
          <ListItemContainer><LinkContainer href="/professional">Profissional</LinkContainer></ListItemContainer>
        </ListContainer>
        <DivContainer>
          <FacebookLogo size={32} color="#018762"/>
          <InstagramLogo size={32} color="#018762"/>
          <LinkedinLogo size={32} color="#018762"/>
        </DivContainer>
        <ParagraphContainer>Desafio Front-end Lacrei</ParagraphContainer>
      </FooterContainer>
    )
}