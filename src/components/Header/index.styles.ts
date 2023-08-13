import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 3.75rem;
    padding: 0 4rem 0 4rem;
    background-color: #EEEEEE;
    @media (max-width: 557px){
        padding: 0;
    }
`

export const NavigationContainer = styled.nav`
    display: flex;
    height: 3.75rem;
    align-items: center;
    background-color: #EEEEEE;
    justify-content: space-between;
    @media (max-width: 557px){
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export const SpanContainer = styled.span`
    font-size: 2rem;
    font-weight: 700;
    color: #018762;
    @media (max-width: 557px){
        display: none;
    }
`

export const ListContainer = styled.ul`
    display: flex;
    gap: 3rem;
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