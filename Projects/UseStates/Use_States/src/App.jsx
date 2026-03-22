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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Conditional/>
    <Products/>
    </>
  )
}

export default App
