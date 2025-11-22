import card1Img from '../assets/images//doxod-dom.png';
import card2Img from '../assets/images/Москва в кино.png'
import card3Img from '../assets/images/Городская усадьба С.Б.Куракина. Главный дом.png'
import card4Img from '../assets/images/Усадьба в современной Москве.png'
import card5Img from '../assets/images/Доходный дом Пантелеева моб.png'
import card6Img from '../assets/images/Доходный дом Пантелеева моб (2).png'

import card7Img from '../assets/images/Городская усадьба С.Б.Куракина. Главный дом моб.png'
import card8Img from '../assets/images/Городская усадьба И.Т. Рахманова, Н.Л. Бухвостова, С....png'
import card9Img from '../assets/images/Доходный дом Пантелеева (2).png'
import card10Img from '../assets/images/Доходный дом Пантелеева моб (3).png'


export const cards = [
   
  {
   id: 1, 
    // Десктоп версия
    title: "Доходный дом Пантелеева",
    description: "Трехэтажное здание с подвалом и мезонином на Старой Басманной улице было построено в 1874 году. В нем снимали жилье горожане среднего достатка.",
    image: card1Img,
    
    // Для планшета
    tabletTitle: "Доходный дом Пантелеева",
    tabletImage: card5Img,
    
    // Для мобилки
    mobileTitle: "Доходный дом Пантелеева",
    mobileImage: card1Img,

address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 4.56,
    link: "/property/1",
   
    favorite: false,
     showButton: false, 
    buttonText: "ПЕРЕЙТИ", 
    icons: {
      home: "/icons/home.svg",
      image: "/images/property1.jpg",
      video: "/videos/property1.mp4",
      view360: "/360/property1.html"
    }
  },
  {
    id: 2,
     // Десктоп версия
    title: "Москва в кино",
    description: "Трехэтажное здание с подвалом и мезонином на Старой Басманной улице было построено в 1874 году.",
    image: card2Img,
    
    // Для планшета
    tabletTitle: "Доходный дом Пантелеева",
    tabletImage: card6Img,
    
    // Для мобилки
    mobileTitle: "Доходный дом Пантелеева",
    mobileImage: card6Img ,
    
    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 5,
    link: "/property/2",
    favorite: false,
    showButton: true, 
    buttonText: "ПЕРЕЙТИ", 
    icons: {
      home: "/icons/home.svg",
      image: "/images/property2.jpg",
      video: "/videos/property2.mp4",
      view360: "/360/property2.html"
    }
  },
  {
    id: 3,
    
      // Десктоп версия
    title: "Городская усадьба С.Б.Куракина. Главный дом",
    description: "Трехэтажное здание с подвалом и мезонином на Старой Басманной улице было построено в 1874 году.",
    image: card3Img,
    
    // Для планшета
    tabletTitle: "Городская усадьба С.Б.Куракина. Главный дом",
    tabletImage: card7Img,
    
    // Для мобилки
    mobileTitle: "Городская усадьба С.Б.Куракина. Главный дом",
    mobileImage: card7Img ,

    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 3.56,
    link: "/property/3",
  
    favorite: false,
     showButton: false, 
    buttonText: "ПЕРЕЙТИ", 
    icons: {
      home: "/icons/home.svg",
      image: "/images/property3.jpg",
      video: "/videos/property3.mp4",
      view360: "/360/property3.html"
    }
  },
  {
    id: 4,
       // Десктоп версия
    title: "Усадьба в современной Москве",
    description: "Трехэтажное здание с подвалом и мезонином на Старой Басманной улице было построено в 1874 году.",
    image: card4Img,
    
    // Для планшета
    tabletTitle: "Доходный дом Пантелеева",
    tabletImage: card10Img,
    
    // Для мобилки
    mobileTitle: "Доходный дом Пантелеева",
    mobileImage: card10Img ,

    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 4.56,
    link: "/property/4",
   
    favorite: false,
     showButton: false, 
    buttonText: "ПЕРЕЙТИ", 
    icons: {
      home: "/icons/home.svg",
      image: "/images/property4.jpg",
      video: "/videos/property4.mp4",
      view360: "/360/property4.html"
    }
  },
  {
    id: 5,
      // Десктоп версия
    title: "Доходный дом Пантелеева",
    description: "Трехэтажное здание с подвалом и мезонином на Старой Басманной улице было построено в 1874 году.",
    image: card2Img,
    
    // Для планшета
    tabletTitle: "Городская усадьба И.Т. Рахманова, Н.Л. Бухвостова, С...",
    tabletImage: card8Img,
    
    // Для мобилки
    mobileTitle: "Городская усадьба И.Т. Рахманова, Н.Л. Бухвостова...",
    mobileImage: card8Img ,
    
    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 1.50,
    link: "/property/5",
 
    favorite: false,
     showButton: false, 
    buttonText: "ПЕРЕЙТИ", 
    icons: {
      home: "/icons/home.svg",
      image: "/images/property5.jpg",
      video: "/videos/property5.mp4",
      view360: "/360/property5.html"
    }
  },
  {
    id: 6,
       // Десктоп версия
    title: "Доходный дом Пантелеева",
    description: "Трехэтажное здание с подвалом и мезонином на Старой Басманной улице было построено в 1874 году.",
    image: card1Img,
    
    // Для планшета
    tabletTitle: "Доходный дом Пантелеева",
    tabletImage: card9Img,
    
    // Для мобилки
    mobileTitle: "Доходный дом Пантелеева",
    mobileImage: card9Img ,

    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 5,
    link: "/property/6",
   
    favorite: false,
     showButton: false, 
    buttonText: "ПЕРЕЙТИ", 
    icons: {
      home: "/icons/home.svg",
      image: "/images/property6.jpg",
      video: "/videos/property6.mp4",
      view360: "/360/property6.html"
    }
  }
];
