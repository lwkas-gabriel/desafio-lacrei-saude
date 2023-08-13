import { MainContainer, SectionContainer, TitleContainer, ParagraphContainer, DivContainer, ButtonContainer, variant } from "./index.styles";

interface MainProps{
    variant?: variant;
}

const title = {
    index: "Boas Vindas a Lacrei Saúde",
    user: "Pessoa Usuária",
    professional: "Profissional"
}

const span = {
    index: "Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+",
    user: "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.",
    professional: "A Lacrei garante que pessoas LGBTQIAPN + recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora."
}

export function Main({variant = "index"}: MainProps){
    return (
        <MainContainer variant={variant}>
            <SectionContainer>
                <TitleContainer>{title[variant]}</TitleContainer>
                <ParagraphContainer variant={variant}>{span[variant]}</ParagraphContainer>
                <DivContainer>
                    <ButtonContainer href="/user">Pessoa Usuária</ButtonContainer>
                    <ButtonContainer href="/professional">Profissional</ButtonContainer>
                </DivContainer>
            </SectionContainer>
        </MainContainer>
    ) 
}