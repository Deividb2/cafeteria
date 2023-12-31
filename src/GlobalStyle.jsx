import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Heebo:wght@100;200;300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700;800&display=swap');

    *, body {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
`
// VARIÁVEIS
export const fontes = {
    Heebo: "'Heebo', sans-serif",
    Playfair: "'Playfair Display', serif"
}
export const cores = {
    preto: '#000',
    cinza: {
        100: '#ccc',
        200: '#e9e9e9'
    },
    branco: '#fff',
    verde: '#404D3C',
    verde2: '#60695D',
    bege: '#f7e5d6',
    bege2: '#fbf2e8'
}