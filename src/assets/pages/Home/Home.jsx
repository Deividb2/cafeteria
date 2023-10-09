import React from 'react'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import BannerHome from '../../components/Banner/BannerHome/BannerHome'
import Ofertas from '../../components/Ofertas/Ofertas'
import Alimentacao from '../../components/Alimentacao/Alimentacao'
import Venha from '../../components/Venha/Venha'
import Galeria from '../../components/Galeria/Galeria'
import Contato from '../../components/Contato/Contato'
import Rodape from '../../components/Rodape/Rodape'

export default function Home() {

    return (
        <>
            <Cabecalho />
            <BannerHome />
            <Ofertas />
            <Alimentacao />
            <Venha />
            <Galeria />
            <Contato />
            <Rodape />
        </>
    )
}