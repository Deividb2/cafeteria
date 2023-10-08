import React, { useState } from 'react'
import { Header, Logo, Sup, Navegacao, Links, Menu, NavegacaoMB, AbrirMenu, FecharMenu, User } from './Cabecalho.style'

export default function Cabecalho() {

    const [menu, setMenu] = useState(false)
    const hendleMenu = () => {
        setMenu(!menu)
    }

    return (
    <>
        <Header>
            <Logo><Sup>47</Sup>Café</Logo>
            <Navegacao mobile='none'>
                <Links cor='#404D3C'>Início</Links>
                <Links>Quem somos</Links>
                <Links>Menu</Links>
                <Links>Pedidos online</Links>
                <Links>Contato</Links>
                <Links login='login'>
                    <User/>
                    Login
                </Links>
            </Navegacao>
            <Menu onClick={() => hendleMenu()}>
                {menu ? <FecharMenu /> : <AbrirMenu /> }
            </Menu>
        </Header>

        <NavegacaoMB menu={menu}>
            <Links cor='#404D3C'>Início</Links>
            <Links>Quem somos</Links>
            <Links>Menu</Links>
            <Links>Pedidos online</Links>
            <Links>Contato</Links>
        </NavegacaoMB>
    </>
    );
}
