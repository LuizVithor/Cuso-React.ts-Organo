import "./Colaborador.css"
import { IColaborador } from './../../compartilhado/interfaces/IColaborador';

const Colaborador = ({nome , imagem , cargo, corDeFundo , data} : IColaborador) => {
    return (
    <div className="colaborador">
        <div className="cabecalho" style={{backgroundColor: corDeFundo}}>
            <img src={imagem} alt={nome}/>
        </div>
        <div className="baixo">
            <div className="rodape">
                <h4>{nome}</h4>
                <h5>{cargo}</h5>
                <h5>{new Date(data).toLocaleDateString()}</h5>
            </div>
        </div>
    </div>

    )
}

export default Colaborador