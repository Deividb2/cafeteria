import styled from "styled-components"
import { cores, fontes } from '../../../../GlobalStyle'

export const Banner =  styled.section `
    min-height: 50vh;
    padding: 5vh 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    text-align: center;
    background-color: ${cores.bege2};
`
export const Titulo =  styled.section `
    font-family: ${fontes.Playfair};
    font-size: 2.5rem;
    font-weight: bold;

    @media (min-width: 768px) {
        font-size: 60px;
    }
`
export const Texto =  styled.section `
    font-family: ${fontes.Heebo};
    font-size: 1.1rem;
    width: 60vw;

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`