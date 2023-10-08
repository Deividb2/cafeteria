import styled from 'styled-components'

export const Galery = styled.section `
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    height: 120vh;

    @media (min-width: 768px) {
        grid-template-columns: repeat(5, 1fr);
        grid-template-rows: 1fr;
        height: 50vh;
    }
`

export const Fotos = styled.div `
    background: url(${(props) => props.caminho}) no-repeat center center / cover;
    filter: brightness(80%);
    
    &:last-child {
        grid-column: 1/3;
    }

    @media (min-width: 768px) {
        &:last-child {
            grid-column: 5/6;
        }
    }
`