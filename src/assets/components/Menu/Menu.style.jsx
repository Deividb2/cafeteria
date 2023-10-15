import styled from "styled-components"
import { fontes, cores } from '../../../GlobalStyle'

export const Geral = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2.5rem;
    padding: 1.5rem 1.3rem;

    @media (min-width: 768px) {
        gap: 3.5rem;
    }
`
export const Titulo = styled.h2 `
    font-family: ${fontes.Playfair};
    font-size: 1.5rem;
    font-weight: 400;
    color: ${cores.preto};

    ${(props) => props.principal ? `
    @media (min-width: 768px) {
        font-size: 2.3rem;
    }
    ` : '' }

    ${(props) => props.subtitulo ? `
    @media (min-width: 768px) {
        font-size: 2rem;
    }
    ` : '' }

    ${(props) => props.pratos ? `
        font-family: ${fontes.Heebo};
        font-size: 18px;
        font-weight: 200;
    ` : '' }
`
export const Padaria = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 1.3rem);
    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }
`

export const Cafeteria = styled.section `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc(100vw - 1.3rem);
`

export const Linha = styled.hr `
    background-color: ${cores.preto};
    height: .1rem;
    width: 55px;
    margin: 1.1rem 0;
    @media (min-width: 768px) {
        margin-bottom: 2rem;
    }
`

export const Pratos = styled.div `
    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: 1fr;
        /* column-gap: 10vw; */
    }
`

export const Prato = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1.1rem;

    @media (min-width: 768px) {
        width: 23vw;
    }
`

export const Descricao = styled.p `
    font-family: ${fontes.Heebo};
    font-weight: 200;
    @media (min-width: 768px) {
        font-size: 15px;
    }
`
export const Preco = styled.span `
    font-family: ${fontes.Heebo};
    font-size: 1rem;
    font-weight: 200;
    color: ${cores.preto};
`