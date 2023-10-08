import styled from 'styled-components'

// ÍCONES
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

export const Header = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.5rem;
    background-color: #f7e5d6;

    @media (min-width: 768px) {
        height: 15vh;
        padding: 0 2rem;
    }
`

export const Logo = styled.h1 `
    display: flex;
    font-size: 2.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 300;
    color: #404D3C;
`

export const Sup = styled.sub `
    color: #000;
`

export const Navegacao = styled.nav `
    display: none;
    font-family: 'Heebo', sans-serif;

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    @media (min-width: 768px) and (max-width: 1000px) {
        gap: 2rem; 
    }
`

export const Links = styled.a `
    color: ${(props) => props.cor ? props.cor : '#000'};
    
    &:hover {
        color: #404D3C;
        cursor: pointer;
    }

    ${(props) => props.login ? `
        display: flex;
        align-items: center;
        gap: 0.5rem;
    ` : ''}
`

export const User = styled(FaUserCircle) `
    font-size: 1.8rem;
    color: #404D3C;
`

export const Menu = styled.div `
    @media (min-width: 768px) {
        display: none;
    }
`

export const NavegacaoMB = styled.div `
    font-family: 'Heebo', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
    height: ${(props) => props.menu ? '100vh' : '0'};
    overflow-y: hidden;
    position: absolute;
    background-color: #f7e5d6;
    transition: 1s ease-in-out;

    @media (min-width: 768px) {
        display: none;
    }
`


// ÍCONES 

export const AbrirMenu = styled(BiMenuAltRight) ` 
    font-size: 3rem;
`

export const FecharMenu = styled(AiOutlineClose) `
    font-size: 3rem;
`