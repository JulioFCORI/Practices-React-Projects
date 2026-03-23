import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Contador from './Components/Contador';
import Ejemplo from './Components/useEffectEjemplo'
import SimpleForm from './Components/forms/simpleForm'
import Conditional from './Components/conditional/Conditional'
import Products from './Components/lists/ProductList'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Contacto from './Components/pages/Contacto'
import Inicio from './Components/pages/Inicio'
import Producto from './Components/pages/Producto'
import NuevoProducto from './Components/pages/NuevoProducto'
import { estaAutenticado } from './utils/auth'
import NoAutorizado from './Components/pages/NoAutorizado'
import NoEncontrado from './Components/pages/NoEncotrado'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/producto" element={<Producto />}>
          <Route path="nuevo"
            element={
              estaAutenticado() ?
                <NuevoProducto /> :
                <Navigate to="/no-autorizado" />
            } />
        </Route>
        <Route path="/no-autorizado" element={<NoAutorizado/>}/>
        {/*Simepre debe de ir al final esta ruta ya que react buscara de arriba a abajo en que ruta caer y si la pongo al inicio siempre caera en esta ya qe es cualquier ruta y como deje a las demas arriba primero ve si encaja con lo de arriba y luego sino se sigue hasta llegar a esta ruta final.*/}
        <Route path="*" element={<NoEncontrado/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
