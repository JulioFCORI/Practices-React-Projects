import { createContext, useState } from "react";

export const TemaContext = createContext();

export function TemaProvider({children}){
    const [modoOscuro, setModoOscuro] = useState(false);

    const toggleTema=()=>setModoOscuro(prev=>!prev);
    return(
        <TemaContext.Provide value={{modoOscuro,toggleTema}}
    )
}