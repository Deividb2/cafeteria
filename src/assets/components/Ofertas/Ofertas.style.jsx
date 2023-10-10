import styled from 'styled-components'
import { fontes, cores } from '../../../GlobalStyle'

import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io' //esquerda e direita

export const Anuncios = styled.div `
    height: 10vh;
    background-color: ${cores.verde};
    color: ${cores.branco};
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: all 1s ease-in-out;
    padding: 0 1rem; //tirar
` 

export const Oferta = styled.h3 `
    font-size: 1.5rem;
    font-family: ${fontes.Heebo};
    font-weight: 100;
    text-align: center;
    cursor: default;
`

export const SetaEsquerda = styled(IoIosArrowBack) `

`

export const SetaDireita = styled(IoIosArrowForward) `

`