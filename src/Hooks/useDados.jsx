import { useContext } from "react";
import { DadosContext } from "../Contexts/DadosContext";

export function useDados() {
    return useContext(DadosContext)
}