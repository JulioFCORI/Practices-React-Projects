import { Link } from "react-router-dom";

function NavBar(){
    return(
        <nav>
        <Link to="/">Inicio</Link>
        <Link to="/contacto">Contacto</Link>
        </nav>
    )
}

export default NavBar;