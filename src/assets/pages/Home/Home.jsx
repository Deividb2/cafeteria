import React from 'react'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import Banner from '../../components/Banner/Banner'
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
            <Banner />
            <Ofertas />
            <Alimentacao />
            <Venha />
            <Galeria />
            <Contato />
            <Rodape />
        </>
    )
}