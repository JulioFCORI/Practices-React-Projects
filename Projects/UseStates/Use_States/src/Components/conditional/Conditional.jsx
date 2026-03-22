import { useState } from "react";

export default function Conditional () {
    const [isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <div>
            {isLoggedIn?
            <p>Bienvenido, usuario</p>:
            <button onClick={(e)=>setIsLoggedIn(!isLoggedIn)}>Iniciar sesión</button>
        }
        </div>
    )
}