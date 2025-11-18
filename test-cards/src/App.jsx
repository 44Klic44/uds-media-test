import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/global.scss'; 

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <h1 className="text-h1">Euclid Flex Bold — Заголовок</h1>
      <p className="text-p">Euclid Flex Medium — Параграф</p>
      <button className="btn">Roboto Regular — Кнопка</button>
    </>
  )
}

export default App
