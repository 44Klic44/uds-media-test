import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/global.scss'; 
import { cards } from './data/udsPlaces';
import Sprite from './components/Sprite/Sprite';
import Icon from './components/icon/Icon';

function App() {
  

  return (
    <>
      {/* Sprite  */}
      <Sprite />
      
     
   
        
       {/* Иконка */}
            <Icon name="uds-icon-distance" size={20} color="black" />
           
<Icon name="uds-icon-address" size={32} color="blue" />
<Icon name="uds-icon-metro" size={32} color="green" />
<Icon name="uds-icon-home" size={32} color="orange" />
<Icon name="uds-icon-image" size={32} color="purple" />
<Icon name="uds-icon-360" size={32} color="brown" />
<Icon name="uds-icon-video" size={32} color="pink" />

        





{/* КАРТОЧКИ */}
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
