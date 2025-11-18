import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/global.scss'; 
import { cards } from './data/udsPlaces';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {cards.map((card) => (
        <div key={card.id}>
          <h2>{card.title}</h2>
          <img src={card.image} alt={card.title} style={{ width: '200px' }} />
        </div>
      ))}
     <h1 className="text-h1">Euclid Flex Bold — Заголовок</h1>
      <p className="text-p">Euclid Flex Medium — Параграф</p>
      <button className="btn">Roboto Regular — Кнопка</button>
    </>
  )
}

export default App
