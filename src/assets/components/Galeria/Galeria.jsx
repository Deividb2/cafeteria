import React from 'react'
import { Galery, Fotos } from './Galeria.style'

// IMAGENS
import Img1 from '../../../../public/imgs/GaleriaImg1.png'
import Img2 from '../../../../public/imgs/GaleriaImg2.png'
import Img3 from '../../../../public/imgs/GaleriaImg3.png'
import Img4 from '../../../../public/imgs/GaleriaImg4.png'
import Img5 from '../../../../public/imgs/GaleriaImg5.png'

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