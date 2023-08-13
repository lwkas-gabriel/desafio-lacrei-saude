import { MainContainer, SectionContainer, TitleContainer, ParagraphContainer, DivContainer, ButtonContainer, BgVariant } from "./index.styles";

interface MainProps{
    bgVariant: BgVariant;
}

export function Main({bgVariant}: MainProps){
    return (
        <MainContainer bgVariant={bgVariant}>
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