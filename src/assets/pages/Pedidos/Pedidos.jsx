import React from 'react'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import BannerQS from '../../components/Banner/BannerOutros/BannerOutros'
import Pedidos from '../../components/Pedidos/Pedidos'
import Contato from '../../components/Contato/Contato'
import Rodape from '../../components/Rodape/Rodape'

export default function Pedido() {

    return (
        <>
            <Cabecalho />
            <BannerQS titulo='Pedidos Online' texto='Sou um parágrafo. Clique aqui para adicionar e editar seu texto. Compartilhe sua história.' />
            <Pedidos /> 
            <Contato />
            <Rodape />
        </>
    )
}