import styled from "styled-components"
import { cores, fontes } from '../../../../GlobalStyle'

// ÍCONES
import { FaMapMarkerAlt, FaPhoneAlt, FaFacebookF, FaTwitter } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { AiFillLike } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa6";

export const Contato = styled.section `
    height: 200vh;
    display: flex;
    flex-direction: column;
`

export const ContatoAlign = styled.div `
    padding: 1rem .5rem;
`

export const ContatoForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
`

export const DivNomes = styled.div `
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
    span {
        display: flex;
        flex-direction: column;
        gap: .5rem;

        label {
            font-size: 1.2rem;
        }

        input {
            width: 90vw;
            padding: .8rem 1rem;
            font-size: 1rem;
        }
    }
`

export const DivInputs = styled.div `
    display: flex;
    flex-direction: column;
    gap: .5rem;

    label {
        font-size: 1.2rem;
    }

    input, textarea {
        width: 90vw;
        padding: .8rem 1rem;
        font-size: 1rem;
    }

    textarea {
        height: 8rem;
        resize: none;
    }
`

export const DivSubmit = styled.div `
    align-self: flex-start;
    margin-left: 1rem;

    input {
        padding: .6rem 1.1rem;
        font-size: 1rem;
        font-weight: bold;
    }
`
export const Linha = styled.div ``

// REDES

export const Redes = styled.div `
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 1fr);
    gap: 2rem;
    padding: 1rem;
`

export const Rede = styled.div `    
    max-width: 15rem;
    display: flex;
    flex-direction: column;
    gap: .7rem;
`

export const Titulo = styled.h3 `
    font-size: 20px; 
    font-weight: 400;
    font-family: ${fontes.Playfair};
`

export const Infos = styled.span `
    font-size: 16px;
    font-weight: 200;
    font-family: ${fontes.Heebo};
`



// ÍCONES
export const MapaIcon = styled(FaMapMarkerAlt) `
    font-size: 1.5rem;
`

export const Email = styled(TfiEmail) `
    font-size: 1.5rem;
`

export const Tel = styled(FaPhoneAlt) `
    font-size: 1.5rem;
`

export const Like = styled(AiFillLike) `
    font-size: 1.5rem;
`

export const Facebook = styled(FaFacebookF) `
    font-size: 1.3rem;
`

export const Twitter = styled(FaTwitter) `
    font-size: 1.3rem;
    margin: 1rem 1rem 0 1rem;
`

export const Instagram = styled(FaInstagram) `
    font-size: 1.3rem;
`