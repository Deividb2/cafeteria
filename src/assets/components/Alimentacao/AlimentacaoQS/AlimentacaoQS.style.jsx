import styled from 'styled-components'
import { Geral, Secao, Titulo, Texto, VerMais, Imagem } from '../Alimentacao.style'
import { fontes, cores } from '../../../../GlobalStyle'

export const Geral1 = styled(Geral) `
    display: grid;
    grid-template-columns: 1fr;
    ${(props) => props.especial ? 'grid-template-rows: 1fr 50vh;' : 'grid-template-rows: 50vh 1fr;'}

    @media (min-width: 768px) {
        height: 100vh;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
    }
`

export const Secao1 = styled(Secao) `
    gap: 0;
    padding: 3rem 1rem;
    @media (min-width: 768px) {
        padding: 5rem 4rem;
    }
`

export const Titulo1 = styled(Titulo) `
    font-size: 2.5rem;

    @media (min-width: 768px) {
        font-size: 4rem;
    }
`

export const Texto1 = styled(Texto) `
    font-size: 1rem;
    font-weight: 200;
    line-height: 1.8rem;

    @media (min-width: 768px) {
        font-size: 1.2rem;
    }
`

export const VerMais1 = styled(VerMais) `
    width: 8rem;
    height: 2.5rem;
    font-size: 1rem;
    @media (min-width: 768px) {
        width: 10rem;
        height: 3rem;
    }
`

export const Imagem1 = styled(Imagem) `
    background-attachment: initial;
`
