import styled from "styled-components";

export const MainContainer = styled.main`
    height: 35rem;
    display: flex;
    flex-direction: column;
    padding: 4rem 0 0 4rem;
    background-image: url("background-one.png");
    background-position: right;
    background-repeat: no-repeat;
`

export const SectionContainer = styled.section`
    max-width: 29rem;
`

export const TitleContainer = styled.h1`
    color: #1F1F1F;
    font-size: 3rem;
    font-weight: 700;
`

export const ParagraphContainer = styled.p`
    color: #515151;
    font-size: 1.5rem;
    font-weight: 400;
    margin-top: 2rem;
`

export const DivContainer = styled.div`
    display: flex;
    gap: 69px;
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
