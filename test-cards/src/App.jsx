import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/global.scss'; 
import { cards } from './data/udsPlaces';
import Sprite from './components/Sprite/Sprite';
import Icon from './components/icon/Icon';
import UdsCard from "./components/Card/UdsCard"; 

function App() {
  

  return (
    <>
      {/* Sprite  */}
      <Sprite />
      
      {/* CARDS  */}
    <div className="uds-cards-grid">
      {cards.map(card => (
        <UdsCard
          key={card.id}
          {...card}   
        />
      ))}
    </div>
        

        





    </>
  )
}

export default App
