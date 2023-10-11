import styled from "styled-components";
import { fontes, cores } from '../../../GlobalStyle'

export const FraseDiv = styled.section `
    padding: 4rem 10px; 
    background-color: ${cores.verde2};
    @media (min-width: 768px) {
        padding: 3rem 10px;
    }
`

export const Frase = styled.p `
    font-family: ${fontes.Playfair};
    font-size: 1.8rem;
    text-align: center;
    color: ${cores.branco};

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`

export const Imagem = styled.img `
    display: none;
`