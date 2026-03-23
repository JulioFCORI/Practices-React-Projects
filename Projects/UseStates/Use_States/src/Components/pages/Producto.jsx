import { useParams, Outlet, Link } from "react-router-dom";
import NavBar from "../NavBar";

const productos = [
    { id: 1, nombre: "Camiseta", precio: "$150" },
    { id: 2, nombre: "Pantalón", precio: "$300" },
    { id: 3, nombre: "Zapatos", precio: "$500" }
]

function Producto() {
    const { id } = useParams();

    return (
        <>
            <NavBar></NavBar>
            <h2>Lista de Productos</h2>
            <ul>
                {productos.map((prod) => (
                    <li key={prod.id}>{prod.nombre} - {prod.precio}</li>
                ))}
            </ul>
            <Link to="nuevo">Agregar nuevo producto</Link>
            <Outlet />
        </>
    )
}

export default Producto;