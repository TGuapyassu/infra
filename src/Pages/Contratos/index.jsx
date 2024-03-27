import { Link } from "react-router-dom"
import { useDados } from "../../Hooks/useDados"

const Contratos = () => {
    const {
        nome,
        setNome,
        rg,
        setRg,
        cpf,
        setCpf,
        modelo,
        setModelo,
        serie,
        setSerie,
        patrimonio,
        setPatrimonio
    } = useDados()

    return (
        <>
            <div>
                <input placeholder='nome'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
                <input placeholder='cpf'
                    value={cpf}
                    onChange={(e) => setCpf(e.target.value)}
                />
                <input placeholder='rg'
                    value={rg}
                    onChange={(e) => setRg(e.target.value)}
                />
                <input placeholder='modelo'
                    value={modelo}
                    onChange={(e) => setModelo(e.target.value)}
                />
                <input placeholder='serie'
                    value={serie}
                    onChange={(e) => setSerie(e.target.value)}
                />
                <input placeholder='patrimonio'
                    value={patrimonio}
                    onChange={(e) => setPatrimonio(e.target.value)}
                />
                <Link to={'/contrato'} >fafd</Link>
            </div>
        </>
    )
}

export default Contratos