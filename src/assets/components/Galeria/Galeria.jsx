import React from 'react'
import { Galery, Fotos } from './Galeria.style'

// IMAGENS
import Img1 from '../../imgs/GaleriaImg1.png'
import Img2 from '../../imgs/GaleriaImg2.png'
import Img3 from '../../imgs/GaleriaImg3.png'
import Img4 from '../../imgs/GaleriaImg4.png'
import Img5 from '../../imgs/GaleriaImg5.png'

export default function Galeria() {

    return (
        <>
            <Galery>
                <Fotos caminho={Img1}></Fotos>
                <Fotos caminho={Img2}></Fotos>
                <Fotos caminho={Img3}></Fotos>
                <Fotos caminho={Img4}></Fotos>
                <Fotos caminho={Img5}></Fotos>
            </Galery>
        </>
    )
}