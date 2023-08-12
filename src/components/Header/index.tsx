import { HeaderContainer, SpanContainer, ListContainer, ListItemContainer, LinkContainer, NavigationContainer } from "./index.styles";

export function Header(){
    return (
        <HeaderContainer>
        <NavigationContainer>
          <SpanContainer>Lacrei</SpanContainer>
          <ListContainer>
            <ListItemContainer><LinkContainer href="">Home</LinkContainer></ListItemContainer>
            <ListItemContainer><LinkContainer href="">Pessoa Usuária</LinkContainer></ListItemContainer>
            <ListItemContainer><LinkContainer href="">Profissional</LinkContainer></ListItemContainer>
          </ListContainer>
        </NavigationContainer>
      </HeaderContainer>
    )
}