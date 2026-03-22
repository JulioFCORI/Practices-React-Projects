import { useEffect } from "react";

export default function Ejemplo (){
    useEffect(()=>{
        console.log("El componente se monto");
        
        return () =>{
            console.log("El componente se desmontó");
        };
    },[]);
    return (<p>Hola desde React</p>)
}