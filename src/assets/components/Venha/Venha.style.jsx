import styled from 'styled-components'
import { fontes, cores } from '../../../GlobalStyle'

export const Principal = styled.section `
    background-color: ${cores.bege};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.8rem;
    padding: 3rem 0;

    @media (min-width: 768px) {
        gap: 2.5rem;
    }
`

export const TituloPrincipal = styled.h2 `
    font-family: ${fontes.Playfair}; 
    font-size: 30px;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 45px;
    }
`
export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    gap: 1.5rem;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        align-items: flex-start;
        gap: 6rem;
    }
`

export const Box = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.8rem;
`

export const Titulos = styled.h3 `
    font-family: ${fontes.Playfair};
    font-size: 22px;
    font-weight: 200;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        font-size: 30px;
        margin-bottom: 1.5rem;
    }
`

export const Informacoes = styled.span `
    font-family: ${fontes.Heebo};
    font-size: 16px;
    font-weight: 200;
`

export const Linha = styled.div `
    height: 10rem;
    width: 1px;
    background-color: ${cores.preto};
    display: none;

    @media (min-width: 768px) {
        display: block;
    }
`