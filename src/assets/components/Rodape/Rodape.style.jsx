import styled from 'styled-components'
import { fontes, cores } from '../../../GlobalStyle'

export const Footer = styled.footer `
    background-color: ${cores.bege};
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
    font-family: ${fontes.Heebo};
    font-weight: 200;
    font-size: 14px;
    color: ${cores.preto};
`