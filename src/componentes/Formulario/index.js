import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css"
  
const Formulario = () => {
    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        "Devops",
        "Ux e Design",
        "Mobile",
        "Inovação e gestão"
    ]

    return (
        <section className="formulario">
            <form>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto label="Nome:" placeholder="Digite seu nome" />
                <CampoTexto label="Cargo:" placeholder="Digite o seu cargo" />
                <CampoTexto label="Imagem:" placeholder="Digite o endereço da imagem" />
                <ListaSuspensa label="Selecione o seu time:" itens={times}/>
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )

}

export default Formulario;