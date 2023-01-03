import "./campoTexto.css"

interface campoTextoProps {
    aoAlterado: (valor: string) => void
    placeholder: string
    label: string
    valor: string
    obrigatorio?: boolean
    tipo?: 'text' | 'password' | 'date' | 'email' | 'number'
}

const CampoTexto = ({aoAlterado , label , valor , placeholder , obrigatorio = false , tipo = 'text'}:campoTextoProps) => {

    // let valor = ''

    const aoDigitado = (evento: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }
    

    return (
        <div className="campo-texto">
            <label>{label}</label>
            <input 
            value={valor} 
            onChange={aoDigitado} 
            required={obrigatorio} 
            placeholder={placeholder}
            type={tipo}
            />
        </div>
    )
}

export default CampoTexto