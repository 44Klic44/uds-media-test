import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './styles/global.scss'; 
import { cards } from './data/udsPlaces';
import Sprite from './components/Sprite/Sprite';
import Icon from './components/icon/Icon';

function App() {
  const [count, setCount] = useState(0)
  

  // Функция для проверки существования спрайта
  const checkSprite = () => {
    const sprite = document.getElementById('uds-icon-distance');
    console.log('Sprite exists:', !!sprite);
    console.log('All symbols:', document.querySelectorAll('symbol'));
  }


  return (
    <>
      {/* Sprite  */}
      <Sprite />
      
     
      <div style={{ 
        padding: '40px', 
        border: '3px solid green', 
        backgroundColor: '#f0f8ff',
        margin: '20px'
      }}>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <Icon name="uds-icon-distance" size={40} color="red" />
            <span>Иконка 40px красная</span>
          </div>

        

       
        </div>
      </div>




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
