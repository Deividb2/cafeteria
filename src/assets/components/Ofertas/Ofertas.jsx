import React, { useEffect, useState } from 'react'
import { Anuncios, Oferta } from './Ofertas.style' 

const OfertasDia = [
    'Oferta do dia | Café e doce: R$ 15,99',
    'Oferta do dia | Almoço e sobremesa: R$ 120,00',
    'Oferta do dia | Lanche da tarde: R$ 25,00',
]

export default function Ofertas() {

    const [ofertaIndex, setOfertaIndex] = useState(0)

    useEffect(() => {
        const intervalId = setInterval(() => {
            setOfertaIndex((prev) => (prev + 1) % OfertasDia.length)
        }, 5000)

        return () => clearInterval(intervalId)

    }, [])

    return (
        <>
            <Anuncios>
                <Oferta>
                    {OfertasDia[ofertaIndex]}
                </Oferta>
            </Anuncios>
        </>
    )
}