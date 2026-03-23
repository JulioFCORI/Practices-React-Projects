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
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Contacto from './Components/pages/Contacto'
import Inicio from './Components/pages/Inicio'
import Producto from './Components/pages/Producto'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio/>} />
        <Route path="contacto" element={<Contacto/>} />
        <Route path="producto/:id" element={<Producto/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
