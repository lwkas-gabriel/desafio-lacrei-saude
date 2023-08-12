import { MainContainer, SectionContainer, TitleContainer, ParagraphContainer, DivContainer, ButtonContainer } from "./index.styles";

export function Main(){
    return (
        <MainContainer>
            <SectionContainer>
                <TitleContainer>Boas Vindas a Lacrei Saúde</TitleContainer>
                <ParagraphContainer>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</ParagraphContainer>
                <DivContainer>
                    <ButtonContainer>Pessoa Usuária</ButtonContainer>
                    <ButtonContainer>Profissional</ButtonContainer>
                </DivContainer>
            </SectionContainer>
        </MainContainer>
    ) 
}