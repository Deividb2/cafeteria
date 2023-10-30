import React from 'react'
import { Geral, Titulo, Padaria, Subtitulo, Pratos, Cafeteria, Box, SubtituloBox, Descricao, Preco } from './Pedidos.style'

export default function Pedidos() {
    return (
        <>
            <Geral>
                <Titulo>O dia todo, todos os dias</Titulo>
                <Padaria>
                    <Subtitulo>Padaria</Subtitulo>
                    <Pratos>
                        {dadosPadaria.map((elemento) => <PedidosPadaria dadosP={elemento} />)}
                    </Pratos>
                </Padaria>

                <Cafeteria>
                    <Subtitulo>Cafeteria</Subtitulo>
                    <Pratos>
                        {dadosCafe.map((elemento) => <PedidosCafe dadosC={elemento} />)}
                    </Pratos>
                </Cafeteria>
            </Geral>
        </>
    )
}

const PedidosPadaria = ({dadosP}) => {
    return (
        <Box>
            <SubtituloBox>{dadosP.titulo}</SubtituloBox>
            <Descricao>{dadosP.descricao}</Descricao>
            <Preco>{dadosP.preco}</Preco>
        </Box>
    )
}

const PedidosCafe = ({dadosC}) => {
    return (
        <Box>
            <SubtituloBox>{dadosC.titulo}</SubtituloBox>
            <Descricao>{dadosC.descricao}</Descricao>
            <Preco>{dadosC.preco}</Preco>
        </Box>
    )
}

const dadosPadaria = [
    {
        titulo: 'Croissant (Simples/Chocolate)',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 12,00',
    },

    {
        titulo: 'Muffin',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 12,00',
    },

    {
        titulo: 'Cheesecake',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 12,00',
    }
]

const dadosCafe = [
    {
        titulo: 'Iogurte grego com granola',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00'
    },

    {
        titulo: 'Pudim de chia',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00'
    },

    {
        titulo: 'Tigela de açaí',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00'
    },

    {
        titulo: 'Torrada com abacate',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00'
    },
    
    {
        titulo: 'Ovos beneditinos',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00'
    },
    
    {
        titulo: 'Bacon e ovos no centeio',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00'
    },
    
    {
        titulo: 'Brioche de salmão e espinafre',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00'
    },
    
    {
        titulo: 'Bagel de salmão defumado',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00',
    },

    {
        titulo: 'Shakshuka verde',
        descricao: 'Sou a descrição de um prato. Clique em "Editar menu" para alterar o texto.',
        preco: 'R$ 24,00',
    }
]