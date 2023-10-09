import React from 'react'
import { Banner, Titulo, Texto } from './BannerOutros.style'

export default function BannerOutros(props) {

    return (
        <>
            <Banner>
                <Titulo>{props.titulo}</Titulo>
                <Texto>{props.texto}</Texto>
            </Banner>
        </>
    )
}