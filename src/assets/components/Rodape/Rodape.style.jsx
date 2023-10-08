import styled from 'styled-components'

export const Footer = styled.footer `
    background-color: #f7e5d6;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 2rem 0;

    @media (min-width: 640px) {
        flex-direction: row;
        gap: 2rem; 
        padding: 1rem;
    }
`

export const Links = styled.a `
    font-family: 'Heebo', sans-serif;
    font-weight: 200;
    font-size: 14px;
    color: #000;
`