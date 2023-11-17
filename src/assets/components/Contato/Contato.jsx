import { Geral, Colunas, Titulo, Subtitulo, DivSubTitulo, Label, Email, Enviar, Redes } from './Contato.style'

export default function Contato() {

    return (
        <>
            <Geral>
                <Colunas>
                    <Titulo>Newsletter</Titulo>
                    <div>
                        <Subtitulo>Fique por dentro de todas as novidades do 47 Café</Subtitulo>
                    </div>

                    <div>
                        <Label htmlFor='email'>Email*</Label>
                        <div>
                            <Email type='text' name='email' placeholder='Insira seu email aqui' id='email' required />
                            <Enviar type='submit' value='Enviar' />
                        </div>
                    </div>
                </Colunas>

                <Colunas>
                    <Titulo>Fale conosco</Titulo>
                    <DivSubTitulo>
                        <Subtitulo>Tel.: (11) 3456-7890</Subtitulo>
                        <Subtitulo>info@meusite.com</Subtitulo>
                    </DivSubTitulo>

                    <DivSubTitulo>
                        <Subtitulo>Rua Prates, 194 - Bom Retiro</Subtitulo>
                        <Subtitulo>São Paulo - SP, 01121-000</Subtitulo>
                    </DivSubTitulo>
                </Colunas>

                <Colunas>
                    <Redes>Instagram</Redes>
                    <Redes>Facebook</Redes>
                    <Redes>Twitter</Redes>
                </Colunas>
            </Geral>
        </>
    )
}