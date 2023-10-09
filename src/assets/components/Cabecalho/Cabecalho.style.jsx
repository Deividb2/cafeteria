import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { fontes, cores } from '../../../GlobalStyle'

// ÍCONES
import { BiMenuAltRight } from 'react-icons/bi'
import { AiOutlineClose } from 'react-icons/ai'
import { FaUserCircle } from 'react-icons/fa'

export const Header = styled.section `
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.5rem;
    background-color: ${cores.bege};

    @media (min-width: 768px) {
        height: 15vh;
        padding: 0 2rem;
    }
`

export const Logo = styled.h1 `
    display: flex;
    font-size: 2.5rem;
    font-family: ${fontes.Playfair};
    font-weight: 300;
    color: ${cores.verde};
    cursor: pointer;
`

export const Sup = styled.sub `
    color: ${cores.preto};
`

export const Navegacao = styled.nav `
    display: none;
    font-family: ${fontes.Heebo};

    @media (min-width: 768px) {
        display: flex;
        align-items: center;
        gap: 4rem;
    }

    @media (min-width: 768px) and (max-width: 1000px) {
        gap: 2rem; 
    }
`

export const Links = styled(Link) `
    text-decoration: none;
    color: ${(props) => props.cor ? props.cor : cores.preto};
    
    &:hover {
        color: ${cores.verde};
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
    color: ${cores.verde};
`

export const Menu = styled.div `
    @media (min-width: 768px) {
        display: none;
    }
`

export const NavegacaoMB = styled.div `
    font-family: ${fontes.Heebo};
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.2rem;
    width: 100%;
    height: ${(props) => props.menu ? '100vh' : '0'};
    overflow-y: hidden;
    position: absolute;
    background-color: ${cores.bege};
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