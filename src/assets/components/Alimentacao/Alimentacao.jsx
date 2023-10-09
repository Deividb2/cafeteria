import React from 'react'
import { Geral, Secao, Titulo, Subtitulo, Texto, VerMais, Imagem } from './Alimentacao.style'
import Coma from '../../../../public/imgs/Coma.png'
import Beba from '../../../../public/imgs/Beba.png'
import Curta from '../../../../public/imgs/Curta.png'

export default function Alimentacao() {

    return (
        <>
            <Geral>
                <Secao>
                    <Titulo>Coma.</Titulo>
                    <Subtitulo>Café da manhã, almoço e sobremesa</Subtitulo>
                    <Texto>Sou um parágrafo. Clique aqui para adicionar seu texto. Sou um ótimo lugar para você contar a sua história e compartilhar um pouco mais sobre você.</Texto>
                    <VerMais>Ver mais</VerMais>
                </Secao>
                <Imagem caminho={Coma}></Imagem>
                
                <Imagem caminho={Beba}></Imagem>
                <Secao>
                    <Titulo>Beba.</Titulo>
                    <Subtitulo>O melhor sabor da cidade</Subtitulo>
                    <Texto>Sou um parágrafo. Clique aqui para adicionar seu texto. Sou um ótimo lugar para você contar a sua história e compartilhar um pouco mais sobre você.</Texto>
                    <VerMais>Ver mais</VerMais>
                </Secao>

                <Secao>
                    <Titulo>Curta.</Titulo>
                    <Subtitulo>Sinta-se em casa</Subtitulo>
                    <Texto>Sou um parágrafo. Clique aqui para adicionar seu texto. Sou um ótimo lugar para você contar a sua história e compartilhar um pouco mais sobre você.</Texto>
                    <VerMais>Ver mais</VerMais>
                </Secao>
                <Imagem caminho={Curta}></Imagem>
            </Geral>
        </>
    )
}