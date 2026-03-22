import { useState } from "react";

export default function SimpleForm() {
    //const [nombre, setNombre] = useState("");
    //const [email, setEmail] = useState("");
    const [formulario, setFormulario] = useState({
        nombre: "",
        email: ""
    });

    const [error, setError] = useState("");
    const [isSave, setIsSave] = useState(false);

    const manejarEnvio = (e) => {
        e.preventDefault();
        if (!formulario.nombre || !formulario.email) {
            setError("Todos los campos son obligatorios")
            setIsSave(false);
            return;
        }
        if (!formulario.email.includes("@")) {
            setError("El correo no es válido");
            setIsSave(false);
            return;
        }
        setIsSave(true);
        console.log("Formulario enviado");
        setError("");
    }

    const manejarCambio = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }


    return (
        <form onSubmit={manejarEnvio}>
            <label htmlFor="">
                Nombre:
                <input type="text" name="nombre" value={formulario.nombre} onChange={/*(e)=>{
                    console.log("nombre onchange: ", nombre);
                    setNombre(e.target.value)}*/
                    manejarCambio
                } />
            </label>
            <label htmlFor="">
                Email:
                <input name="email" type="text" value={formulario.email} onChange={/*(e)=>{setEmail(e.target.value)}*/

                    manejarCambio
                } />
            </label>
            <button type="submit">Enviar</button>
            {isSave && <p>Hola, {formulario.nombre}. Te enviaremos en breve información al correo {formulario.email}</p>};
            {error && <p style={{color: 'red'}}>{error}</p>}
        </form>

    );
}