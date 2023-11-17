import styled from "styled-components";
import BannerImg from "../../../../../public/imgs/Banner.png";
import { fontes, cores } from "../../../../GlobalStyle";
import { Link } from "react-router-dom";

export const Geral = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${cores.branco};
  background: url(${BannerImg}) no-repeat center center / cover;
  background-attachment: fixed;
  @media (min-width: 1024px) {
    justify-content: flex-start;
    text-align: left;
  }
`;

export const Align = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  gap: 3rem;
  @media (min-width: 1024px) {
    padding: 0 5rem;
  }
`;

export const Titulo = styled.h2`
  font-size: 1.1rem;
  font-weight: 300;
  font-family: ${fontes.Heebo};

  @media (min-width: 640px) {
    font-size: 1.4rem;
  }

  @media (max-width: 270px) {
    font-size: 1rem;
  }
`;

export const Subtitulo = styled.h1`
  font-size: 3rem;
  font-family: ${fontes.Playfair};

  @media (max-width: 300px) {
    font-size: 2rem;
  }

  @media (min-width: 500px) {
    font-size: 4rem;
  }

  @media (min-width: 1024px) {
    width: 50vw;
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`;

export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.cor? props.cor: cores.preto};
  width: 10rem;
  min-height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${cores.branco};
  transition: background-color 0.5s ease;
  font-family: ${fontes.Heebo};

  &:hover {
    background-color: ${cores.verde};
    cursor: pointer;
  }

  @media (max-width: 200px) {
    width: calc(100vw - 1rem);
  }
`;
