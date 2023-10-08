import React from 'react'
import { Principal, TituloPrincipal, Container, Box, Titulos, Informacoes, Linha } from './Venha.style'

export default function Venha() {

    return (
        <>
            <Principal>
                <TituloPrincipal>Venha se deliciar</TituloPrincipal>
                <Container>
                    <Box>
                        <Titulos>Endereço</Titulos>
                        <Informacoes>Rua Prates, 194 - Bom Retiro</Informacoes>
                        <Informacoes>São Paulo - SP, 01121-000</Informacoes>
                    </Box>

                    <Linha></Linha>
                    
                    <Box>
                        <Titulos>Horário de funcionamento</Titulos>
                        <Informacoes>Seg. a Sex.: 9:00 às 16:00</Informacoes>
                        <Informacoes>Sábado: 10:00 às 14:00</Informacoes>
                        <Informacoes>Domingo: fechado</Informacoes>
                    </Box>
                </Container>
            </Principal>
        </>
    )
}