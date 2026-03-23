import { useParams } from "react-router-dom";
import NavBar from "../NavBar";

function Producto(){
    const {id} = useParams();

    return(
        <>
        <NavBar></NavBar>
        <h3>Producto {id}</h3>
        </>
    )
}

export default Producto;