import { Geral, Titulo, Padaria, Cafeteria, Linha, Pratos, Prato, Descricao, Preco } from './Menu.style'

export default function Menu() {

    return (
        <>
            <Geral>
                <Titulo principal='null'>O dia todo, todos os dias</Titulo>
                <Padaria>
                    <Titulo subtitulo='null'>Padaria</Titulo>
                    <Linha />
                    <Pratos>
                        {dadosPadaria.map((elemento) => <PadariaContainer dadosP={elemento} />)}
                    </Pratos>
                </Padaria>

                <Cafeteria>
                    <Titulo subtitulo='null'>Café da manhã</Titulo>
                    <Linha />
                    <Pratos>
                    {dadosCafeteria.map((elemento) => <CafeteriaContainer dadosC={elemento} />)}
                    </Pratos>
                </Cafeteria>
            </Geral>
        </>
    )
}

const dadosPadaria = [
    {
        titulo: "Croissant (Simples/Chocolate)", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  12"
    },
    {
        titulo: "Muffin", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  12"
    },
    {
        titulo: "Cheesecake", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  12"
    },
] 

const dadosCafeteria = [
    {
        titulo: "Iogurte grego com granola", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
    {
        titulo: "Pudim de chia", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
    {
        titulo: "Tigela de açaí", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
    {
        titulo: "Torrada com abacate", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
    {
        titulo: "Ovos beneditinos", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
    {
        titulo: "Bacon e ovos no centeio", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
    {
        titulo: "Brioche de salmão e espinafre", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
    {
        titulo: "Bagel de salmão defumado", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
    {
        titulo: "Shakshuka verde", 
        descricao: "Sou a descrição de um prato. Clique em Editar menu para alterar o texto.",
        preco: "R$  24"
    },
] 

const PadariaContainer = ({dadosP}) => {
    return (
        <Prato>
            <Titulo pratos='null'>{dadosP.titulo}</Titulo>
            <Descricao>{dadosP.descricao}</Descricao>
            <Preco>{dadosP.preco}</Preco>
        </Prato>
    )
}

const CafeteriaContainer = ({dadosC}) => {
    return (
        <Prato>
            <Titulo pratos='null'>{dadosC.titulo}</Titulo>
            <Descricao>{dadosC.descricao}</Descricao>
            <Preco>{dadosC.preco}</Preco>
        </Prato>
    )
}