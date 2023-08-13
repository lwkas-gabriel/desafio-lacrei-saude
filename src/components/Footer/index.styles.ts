import styled from "styled-components";

export const FooterContainer = styled.footer`
    margin-top: 9.125rem;
    padding-left: 4rem;
    @media (max-width: 590px){
        padding-left: 0;
    }
`

export const ListContainer = styled.ul`
    display: flex;
    gap: 2.5rem;
    margin-bottom: 1.5rem;
    @media (max-width: 590px){
        display: flex;
        justify-content: center;
    }
`

export const ListItemContainer = styled.li`
    list-style: none;
`

export const LinkContainer = styled.a`
    text-decoration: none;
    font-size: 1rem;
    font-weight: 700;
    color: #1F1F1F;
    &:hover{
        color: #018762;
    }
`

export const DivContainer = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 1.5rem;
    @media (max-width: 590px){
        justify-content: center;
    }
`

export const ParagraphContainer = styled.p`
    color: #515151;
    font-size: 0.75rem;
    font-weight: 400;
`