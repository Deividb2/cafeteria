import styled from 'styled-components'
import { fontes, cores } from '../../../GlobalStyle'

export const Anuncios = styled.div `
    height: 10vh;
    background-color: ${cores.verde};
    color: ${cores.branco};
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 1s ease-in-out;
` 

export const Oferta = styled.h3 `
    font-size: 1.5rem;
    font-family: ${fontes.Heebo};
    font-weight: 100;
    text-align: center;
    cursor: default;
`