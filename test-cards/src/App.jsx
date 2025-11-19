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
      
     
    <div className="uds-cards-grid">
      {cards.map(card => (
        <UdsCard
          key={card.id}
          {...card}   // ← ВАЖНО: проброс всех данных карточки
        />
      ))}
    </div>
        
       {/* Иконка */}
            <Icon name="uds-icon-distance" size={20} color="black" />
           
<Icon name="uds-icon-address" size={32} color="blue" />
<Icon name="uds-icon-metro" size={32} color="green" />
<Icon name="uds-icon-home" size={32} color="orange" />
<Icon name="uds-icon-image" size={32} color="purple" />
<Icon name="uds-icon-360" size={32} color="brown" />
<Icon name="uds-icon-video" size={32} color="pink" />

        





    </>
  )
}

export default App
