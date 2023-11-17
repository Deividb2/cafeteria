import { Contato, ContatoAlign, ContatoForm, DivNomes, DivInputs, DivSubmit, Linha, Redes, Rede, Titulo, Infos, MapaIcon, Email, Tel, Like, Facebook, Twitter, Instagram } from './Formulario.style'

export default function Formulario() {

    return (
        <>
            <Contato>
                <ContatoAlign>
                    <ContatoForm>
                        <DivNomes>
                            <span>
                                <label htmlFor="nome">Nome*</label>
                                <input type="text" name="nome" id="nome" />
                            </span>

                            <span>
                                <label htmlFor="sobrenome">Sobrenome*</label>
                                <input type="text" name="sobrenome" id="sobrenome" />
                            </span>
                        </DivNomes>

                        <DivInputs>
                            <label htmlFor="email">Email*</label>
                            <input type="email" name="email" id="email" />
                        </DivInputs>

                        <DivInputs>
                            <label htmlFor="msg">Mensagem</label>
                            <textarea name="mensagem" id="msg"></textarea>
                        </DivInputs>

                        <DivSubmit>
                            <input type="submit" value="Enviar" />
                        </DivSubmit>

                    </ContatoForm>

                    <Linha></Linha>

                    <Redes>
                        <Rede>
                            <MapaIcon/>
                            <Titulo>Endereço</Titulo>
                            <Infos>Rua Prates, 194 - Bom Retiro</Infos>
                            <Infos>São Paulo - SP, 01121-000</Infos>
                        </Rede>
                        <Rede>
                            <Email/>
                            <Titulo>Telefone</Titulo>
                            <Infos>(11) 3456-7890</Infos>
                        </Rede>
                        <Rede>
                            <Tel/>
                            <Titulo>Email</Titulo>
                            <Infos>info@meusite.com</Infos>
                        </Rede>
                        <Rede>
                            <Like/>
                            <Titulo>Redes sociais</Titulo>
                            <Infos redes=''>
                                <Facebook />
                                <Twitter />
                                <Instagram />
                            </Infos>
                        </Rede>
                    </Redes>
                </ContatoAlign>
                <div></div>
            </Contato>
        </>
    )
}