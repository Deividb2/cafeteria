import React from 'react'
import { Geral1, Secao1, Titulo1, Texto1, VerMais1, Imagem1 } from './AlimentacaoQS.style'
import AlimentacaoQS1 from '../../../../../public/imgs/AlimentacaoQS1.webp'
import AlimentacaoQS2 from '../../../../../public/imgs/AlimentacaoQS2.webp'
import Faixa from '../../Faixa/Faixa'

export default function AlimentacaoQS() {

    return (
        <>
            <Geral1>
                <Imagem1 caminho={AlimentacaoQS1} />
                <Secao1>
                    <Titulo1>O melhor sabor das redondezas</Titulo1>
                    <Texto1>Sou um modelo de título extra longo. Aqui você pode adicionar e editar seu texto. É fácil, basta clicar em "Editar texto" ou clicar 2 vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para compartilhar a sua história com os visitantes.</Texto1>
                    <VerMais1>Ver Menu</VerMais1>
                </Secao1>
            </Geral1>

            <Faixa />

            <Geral1 especial='null'>
                <Secao1>
                    <Titulo1>Com todo amor para o seu prato</Titulo1>
                    <Texto1>Sou um modelo de título extra longo. Aqui você pode adicionar e editar seu texto. É fácil, basta clicar em "Editar texto" ou clicar 2 vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para compartilhar a sua história com os visitantes.</Texto1>
                    <VerMais1>Ver Menu</VerMais1>
                </Secao1>
                <Imagem1 caminho={AlimentacaoQS2} />
            </Geral1>
        </>
    )
}