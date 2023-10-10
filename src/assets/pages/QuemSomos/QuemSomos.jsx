import React from 'react'
import Cabecalho from '../../components/Cabecalho/Cabecalho'
import BannerQS from '../../components/Banner/BannerOutros/BannerOutros'
import AlimentacaoQS from '../../components/Alimentacao/AlimentacaoQS/AlimentacaoQS'
import Contato from '../../components/Contato/Contato'
import Rodape from '../../components/Rodape/Rodape'

export default function QuemSomos() {

    return (
        <>
            <Cabecalho />
            <BannerQS titulo='Quem somos' texto='Uma boa refeição num lugar amigável faz uma enorme diferença na vida.Aproveite uma comida saborosa de origem local, servida com amor.' />
            <AlimentacaoQS />
            <Contato />
            <Rodape />
        </>
    )
}