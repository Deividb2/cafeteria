import React from "react";
import { Geral, Align, Titulo, Subtitulo, DivButtons, ButtonLink } from "./BannerHome.style";

export default function Banner() {
  return (
    <>
      <Geral>
        <Align>
          <Titulo>Café e restaurante desde 2035</Titulo>
          <Subtitulo>
            Seu local para delícias e aquele café inigualável
          </Subtitulo>
          <DivButtons>
            <ButtonLink cor='#fff' to='/pedidos'>Fazer Pedido</ButtonLink>
            <ButtonLink cor='#fff' to='/menu'>Menu</ButtonLink>
          </DivButtons>
        </Align>
      </Geral>
    </>
  );
}
