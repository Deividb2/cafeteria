import styled from 'styled-components'

export const Geral = styled.section `
    display: flex;
    flex-direction: column;
    padding: 3rem 1.5rem;
    gap: 4rem;
    background-color: #404D3C;
    color: #fff;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
    }
`
export const Colunas = styled.div `
    display: grid;
    gap: 1rem;
`
export const Titulo = styled.h2 `
    font-size: 26px;
    font-family: 'Playfair Display', serif;
    font-weight: 200;

    @media (min-width: 768px) {
        font-size: 30px;
    }
`

export const DivSubTitulo = styled.div `
    display: flex;
    flex-direction: column; 
`

export const Subtitulo = styled.span `
    font-size: 15px;
    font-family: 'Heebo', sans-serif;

    @media (min-width: 768px) {
        font-size: 16px;
    }
`
export const Label = styled.label ``

export const Email = styled.input `
    outline: none;
    border: 1px solid #fff;
    border-right: none;
    padding: 14px 7px;
    width: 80%;
    background-color: transparent;
    color: #fff;
    &::placeholder {
        color: #fff;
    }

    @media (min-width: 400px) and (max-width: 768px) {
        width: 40%;
    }
`

export const Enviar = styled.input `
    border: 1px solid #fff;
    padding: 14px 5px;
    background-color: transparent;
    width: 20%;
    color: #fff;

    @media (min-width: 400px) and (max-width: 768px) {
        width: 15%;
    }
`

export const Redes = styled.h2 `
    font-size: 2rem;

    @media (min-width: 768px) {
        font-size: 3rem;
    }
`