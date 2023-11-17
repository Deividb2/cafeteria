import React from 'react'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import BannerQS from '../../components/Banner/BannerOutros/BannerOutros'
import Formulario from './components/Formulario'
import Rodape from '../../components/Rodape/Rodape'

export default function Contato() {

    return (
        <>
            <Cabecalho />
            <BannerQS titulo='Entre em contato' texto='Sou um parágrafo. Clique aqui para adicionar e editar seu texto. Compartilhe sua história.' />
            <Formulario />
        </>
    )
}