import './listaSuspensa.css'

interface ListaSuspensaProps {
    aoAlterado : (valor: string) => void
    label : string
    valor : string
    itens : string[]
    obrigatorio : boolean
}

const ListaSuspensa = (props : ListaSuspensaProps) => {
    return (
        <div className="lista-suspensa">
            <label>{props.label}</label>
            <select onChange={evento => props.aoAlterado(evento.target.value)} required={props.obrigatorio} value={props.valor}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa