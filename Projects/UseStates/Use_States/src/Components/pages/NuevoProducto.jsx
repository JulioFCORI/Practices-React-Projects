import { useEffect, useState } from "react";

function NuevoProducto(){
    const [nombre,SetNombre] = useState("");
    const [precio, SetPrecio] =useState("");

    const handleSubmit = (e) =>{
        e.preventDefault();
        alert(`Producto agregado:${nombre}-${precio}`);
        SetNombre("");
        SetPrecio("");
    };

    return(
        <form onSubmit={handleSubmit}>
            <h3>Nuevo Producto</h3>
            <div>
                <label htmlFor="">Nombre:</label>
                <input type="text" value={nombre} onChange={(e)=>SetNombre(e.target.value)} />
            </div>
                <label htmlFor="">Precio:</label>
                <input type="text" value={precio} onChange={(e)=>(SetPrecio(e.target.value))}/>
            <div>

            </div>
            <button type="submit">Agregar</button>
        </form>
    )
};
export default NuevoProducto;