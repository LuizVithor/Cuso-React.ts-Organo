import Colaborador from "../colaborador";
import "./time.css";
import { IColaborador } from './../../compartilhado/interfaces/IColaborador.js';

interface timeProps {
    corPrimaria : string
    corSecundaria : string
    nome : string
    colaboradores : IColaborador[]
}

const Time = (props : timeProps) => {
    return (
        props.colaboradores.length > 0 ? 
        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor : props.corPrimaria}}> {props.nome} </h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => 
                <Colaborador
                    key={colaborador.nome}
                    nome={colaborador.nome} 
                    cargo={colaborador.cargo}
                    imagem={colaborador.imagem}
                    corDeFundo={props.corPrimaria}
                    data={colaborador.data}
                />)}
            </div>
        </section>
        : <></>
    )
}

export default Time;