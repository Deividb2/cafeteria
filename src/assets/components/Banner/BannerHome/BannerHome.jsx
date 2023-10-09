import React from "react";
import {
  Geral,
  Div,
  Titulo,
  Subtitulo,
  DivButtons,
  ButtonLink,
} from "./BannerHome.style";

export default function Banner() {
  return (
    <>
      <Geral>
        <Div>
          <Titulo>Café e restaurante desde 2035</Titulo>
          <Subtitulo>
            Seu local para delícias e<br /> aquele café inigualável
          </Subtitulo>
          <DivButtons>
            <ButtonLink>Fazer Pedido</ButtonLink>
            <ButtonLink>Menu</ButtonLink>
          </DivButtons>
        </Div>
      </Geral>
    </>
  );
}
