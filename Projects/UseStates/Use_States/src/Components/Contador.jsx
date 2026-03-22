import { useEffect, useState } from "react";

export default function Contador(){
    const [contador,SetContador] = useState(0);

    useEffect(()=>{
        console.log(`Contador: ${contador}`);
    },[contador]);

    useEffect(()=>{
        const id = setInterval(()=>{
            console.log("Tic-Tac");
        },1000);
        return ()=>{
            clearInterval(id);
        };
    },[]);

    return(
        <div>
            <p>Ha hecho click {contador} veces</p>
            <button onClick={()=>{SetContador(contador+1)}}>Aumentar</button>
        </div>
    )
};