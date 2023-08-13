import styled from "styled-components";

export type variant = "index" | "user" | "professional";

interface MainContainerProps{
    variant: variant;
}

const background = {
    index: "background-index.png",
    user: "background-user.png",
    professional: "background-professional.png"
}

const border = {
    index: "none",
    user: "0.313rem solid #018762",
    professional: "0.313rem solid #018762"
}

const padding = {
    index: "0",
    user: "1.5rem",
    professional: "1.5rem"
}

export const MainContainer = styled.main<MainContainerProps>`
    height: 35rem;
    display: flex;
    flex-direction: row;
    justify-content: start;
    margin-left: 4rem;
    align-items: center;
    //padding: 4rem 0 0 4rem;
    background-position: right;
    background-repeat: no-repeat;
    @media (max-width: 950px){
        background-image: none;
    }
    @media (max-width: 557px){
        justify-content: center;
        padding: 0;
        margin: 0;
    }
    ${ props => {
        return `
        background-image: url(${background[props.variant]})
    `
    }} 

`

export const SectionContainer = styled.section`
    max-width: 29rem;
    @media (max-width: 460px){
        max-width: 85%;
    }
`

export const TitleContainer = styled.h1`
    color: #1F1F1F;
    font-size: 3rem;
    font-weight: 700;
`

export const ParagraphContainer = styled.p<MainContainerProps>`
    color: #515151;
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 2rem;
    ${props => {
        return `
        border-left: ${border[props.variant]};
        padding-left: ${padding[props.variant]};
        `
    }}
`

export const DivContainer = styled.div`
    display: flex;
    gap: 4.313rem;
    margin-top: 3rem;
`

export const ButtonContainer = styled.button`
    width: 12rem;
    height: 3rem;
    text-align: center;
    font-size: 1.125rem;
    font-weight: 700;
    color: #018762;
    background-color: #fff;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    &:hover{
        color: #fff;
        background-color: #018762;
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        transition: .5s;
    }
`
