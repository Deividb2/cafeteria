import styled from "styled-components";
import { fontes, cores } from '../../../GlobalStyle'

export const Geral = styled.main `
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;

    @media (max-width: 500px) {
        padding: 0 1rem;
    }

    @media (min-width: 500px) and (max-width: 700px) {
        padding: 0 2rem;
    }

    @media (min-width: 700px) {
        padding: 0 5rem;
    } 
`

export const Titulo = styled.h2 `
    color: ${cores.verde};
    margin: 1.5rem 0;
    text-align: center;
    color: ${cores.preto};
    font-size: 1.5rem;
    font-family: ${fontes.Playfair};

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`

export const Padaria = styled.section `
    display: flex;
    flex-direction: column;
`

export const Subtitulo = styled.h2 `
    font-size: 1.25rem;
    font-family: ${fontes.Playfair};
    font-weight: bold;
    margin: 1rem 0;

    @media (min-width: 768px) {
        font-size: 2rem;
        margin: 2rem 0;
    }
`

export const Pratos = styled.div `
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: 1fr;
        gap: 1.5rem;
    }
`

export const Cafeteria = styled.section `
    display: flex;
    flex-direction: column;
`

export const Box = styled.div `
    border: 1px solid ${cores.preto};
    padding: 0.8rem 0.5rem;
    margin: .5rem 0;
    box-sizing: border-box;

    &:hover {
        border-color: ${cores.verde};
        background-color: ${cores.cinza[200]};
        transition: border, background-color 0.5s ease;
    }

    @media (min-width: 768px) {
        padding: 2rem 0.5rem;
        border-color: ${cores.cinza[100]};
    }
`

export const SubtituloBox = styled.h3 `
    font-family: ${fontes.Playfair};
    font-size: 1.1rem;

    @media (min-width: 768px) {
        font-size: 1.3rem;
    }
`

export const Descricao = styled.p `
    font-family: ${fontes.Heebo};
    font-size: 0.9rem;
    margin: 0.8rem 0;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`

export const Preco = styled.span `
    font-family: ${fontes.Heebo};
    font-size: 0.9rem;

    @media (min-width: 768px) {
        font-size: 1rem;
    }
`