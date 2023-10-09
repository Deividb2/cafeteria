import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap');

    *, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    @keyframes digitando {
        from {
            width: 0;
        }
    }

    @keyframes piscando {
        50% {
            border-color: transparent;
        }
    }
`
// VARIÁVEIS
export const fontes = {
    'Heebo': "'Heebo', sans-serif",
    'Playfair': "'Playfair Display', serif"
}
export const cores = {
    'preto': '#000',
    'branco': '#fff',
    'verde': '#404D3C',
    'bege': '#f7e5d6',
    'bege2': '#fbf2e8'
}