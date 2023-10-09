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
            <Logo onClick={()=>{
                window.open('https://pt.wix.com/website-template/view/html/3096?originUrl=https%3A%2F%2Fpt.wix.com%2Fwebsite%2Ftemplates%3Fcriteria%3D47%2Bcaf%25C3%25A9&tpClick=view_button&esi=847877d3-084f-4345-bfe8-9b7883929438', '_blank')
            }}><Sup>47</Sup>Café</Logo>
            <Navegacao mobile='none'>
                <Links cor='#404D3C' to='/'>Início</Links>
                <Links to='/quem-somos'>Quem somos</Links>
                <Links to='/menu'>Menu</Links>
                <Links to='/pedidos'>Pedidos online</Links>
                <Links to='/contato'>Contato</Links>
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
