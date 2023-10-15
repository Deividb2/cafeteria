import React from 'react'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import BannerQS from '../../components/Banner/BannerOutros/BannerOutros'
import MenuComponent from '../../components/Menu/Menu'
import Contato from '../../components/Contato/Contato'
import Rodape from '../../components/Rodape/Rodape'

export default function Menu() {

    return (
        <>
            <Cabecalho />
            <BannerQS titulo='Nosso Menu' texto='Sou um parágrafo. Clique aqui para adicionar e editar seu texto. Compartilhe sua história.' />
            <MenuComponent />
            <Contato />
            <Rodape />
        </>
    )
}