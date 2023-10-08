import styled from 'styled-components'
import { ButtonLink } from '../Banner/Banner.style'

export const Geral = styled.section `
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    @media (min-width: 768px) {
        height: 300vh;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: repeat(3, 1fr);
    }
`
export const Secao = styled.div `
    display: grid;
    gap: 0.5rem;
    padding: 5rem 1rem;
    color: #000; 
    background: #fff;
    @media (min-width: 768px) {
        place-content: center;
        margin: 0;
        background-image: none;
    }
`
export const Titulo = styled.h3 `
    font-size: 5rem;
    font-weight: 600;
    font-family: 'Playfair Display', serif;
`
export const Subtitulo = styled.h4 `
    font-size: 1.2rem;
    font-weight: 100;
    font-family: 'Heebo', sans-serif;
`
export const Texto = styled.p `
    font-size: xx-large;
    margin: 2.1rem 0;
    font-size: 1.2rem;
    font-family: 'Heebo', sans-serif;
    font-weight: 200;

    @media (min-width: 1200px) {
        width: 25rem;
    }
`

export const VerMais = styled(ButtonLink) `
    border-color: #000;
    font-size: 1.1rem;

    &:hover {
        border-color: #404D3C;
        color: #fff;
    }
`

export const Imagem = styled.div `
    background: url(${(props) => props.caminho}) no-repeat center center / cover;
    height: 100%;
    width: 100%;

    @media (max-width: 768px) {
        &:nth-child(3) {
            grid-row: 4/5;   
        }
        background-attachment: fixed;
    }
`