import "./formulario.css"
import CampoTexto from "../campoDeTexto"
import ListaSuspensa from '../listaSuspensa/index';
import Botao from "../Botao";
import { useState } from 'react';
import { IColaborador } from './../../compartilhado/interfaces/IColaborador';

interface formularioProps {
    aoColaboradorCadastrado : (colaborador:IColaborador) => void
    times : string[]
}

const Formulario = (props : formularioProps) => {
    const [nome , setNome] = useState('')
    const [cargo , setCargo] = useState('')
    const [imagem , setImagem] = useState('')
    const [time , setTime] = useState('Programação')
    const [data , setData] = useState('')

    const aoSalvar = (evento : React.FormEvent<HTMLFormElement>) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
            data
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('Programação')
        setData('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu Nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu Cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digite o endereço da Imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <CampoTexto 
                    label='Data de entrada no time'
                    placeholder=""
                    valor={data}
                    aoAlterado={valor => setData(valor)}
                    tipo="date"
                />
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario