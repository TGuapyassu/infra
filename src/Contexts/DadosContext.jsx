import { useState, createContext } from "react"

export const DadosContext = createContext()

export function DadosProvider({ children }) {
    const [nome, setNome] = useState('')
    const [rg, setRg] = useState('')
    const [cpf, setCpf] = useState('')
    const [modelo, setModelo] = useState('')
    const [serie, setSerie] = useState('')
    const [patrimonio, setPatrimonio] = useState('')
    return (
        <DadosContext.Provider value={{
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
        }}>
            {children}
        </DadosContext.Provider>
    )
}

