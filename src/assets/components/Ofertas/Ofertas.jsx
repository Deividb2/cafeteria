import { useEffect, useState } from 'react'
import { Anuncios, Oferta, SetaEsquerda, SetaDireita } from './Ofertas.style' 

const OfertasDia = [
    'Oferta do dia | Café e doce: R$ 15,99',
    'Oferta do dia | Almoço e sobremesa: R$ 120,00',
    'Oferta do dia | Lanche da tarde: R$ 25,00',
]

export default function Ofertas() {

    const [ofertaIndex, setOfertaIndex] = useState(0)

    const anterior = () => {
        if(ofertaIndex === 0){
            return setOfertaIndex(OfertasDia.length - 1)
        } else {
            return setOfertaIndex((prev) => Math.max(0, prev - 1))
        }
    }

    const proximo = () => {
        if(ofertaIndex === OfertasDia.length - 1){
            return setOfertaIndex(0)
        } else {
            return setOfertaIndex((prev) => Math.min(OfertasDia.length - 1, prev + 1))
        }
    }

    useEffect(() => {
        const intervalo = setInterval(() => {
            setOfertaIndex((prev) => Math.min(OfertasDia.length - 1, prev + 1))
        }, 5000)

        return () => clearInterval(intervalo)
    }, [])

    return (
        <>
            <Anuncios>
                <SetaEsquerda onClick={() => anterior()}>anterior</SetaEsquerda>
                <Oferta>
                    {OfertasDia[ofertaIndex]}
                </Oferta>
                <SetaDireita onClick={() => proximo()}>próximo</SetaDireita>
            </Anuncios>
        </>
    )
}