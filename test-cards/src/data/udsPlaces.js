import card1Img from '../assets/images/Доходный дом Пантелеева моб (3).png';
import card2Img from '../assets/images/doxod-dom.png'
import card3Img from '../assets/images/doxod-dom.png'
import card4Img from '../assets/images/doxod-dom.png'
import card5Img from '../assets/images/doxod-dom.png'
import card6Img from '../assets/images/doxod-dom.png'


export const cards = [
  {
    id: 1, // уникальный идентификатор карточки
    title: "Доходный дом Пантелеева", // заголовок карточки
    description: "Трехэтажное здание с подвалом и мезонином на Старой Басманной улице было построено в 1874 году. В нем снимали жилье горожане среднего достатка.", // описание карточки
    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 4.56,
    link: "/property/1",
    image: card1Img,
    favorite: false,
    icons: {
      home: "/icons/home.svg",
      image: "/images/property1.jpg",
      video: "/videos/property1.mp4",
      view360: "/360/property1.html"
    }
  },
  {
    id: 2,
    title: "Москва в кино",
    description: "Историческая локация Москвы, ставшая декорацией для многих фильмов. ",
    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 4.56,
    link: "/property/2",
    image: card2Img,
    favorite: false,
    icons: {
      home: "/icons/home.svg",
      image: "/images/property2.jpg",
      video: "/videos/property2.mp4",
      view360: "/360/property2.html"
    }
  },
  {
    id: 3,
    title: "Городская усадьба С.Б.Куракина. Главный дом",
    description: "Главный дом городской усадьбы, построенный в классическом стиле.",
    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 4.56,
    link: "/property/3",
    image: card3Img ,
    favorite: false,
    icons: {
      home: "/icons/home.svg",
      image: "/images/property3.jpg",
      video: "/videos/property3.mp4",
      view360: "/360/property3.html"
    }
  },
  {
    id: 4,
    title: "Усадьба в современной Москве",
    description: "Современная усадьба с уникальной архитектурой и историческим контекстом.",
    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 4.56,
    link: "/property/4",
    image: card4Img,
    favorite: false,
    icons: {
      home: "/icons/home.svg",
      image: "/images/property4.jpg",
      video: "/videos/property4.mp4",
      view360: "/360/property4.html"
    }
  },
  {
    id: 5,
    title: "Доходный дом Пантелеева (вариант 2)",
    description: "Ещё один взгляд на известный доходный дом с историческим интерьером.",
    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 4.56,
    link: "/property/5",
    image: card5Img,
    favorite: false,
    icons: {
      home: "/icons/home.svg",
      image: "/images/property5.jpg",
      video: "/videos/property5.mp4",
      view360: "/360/property5.html"
    }
  },
  {
    id: 6,
    title: "Доходный дом Пантелеева (вариант 3)",
    description: "Последний вариант доходного дома с уникальными деталями фасада.",
    address: "ул. Юности, д. 2, стр. 1, ВАО",
    distance: "3 км от вас",
    metro: "Арбатская, 3 мин",
    rating: 4.56,
    link: "/property/6",
    image: card6Img,
    favorite: false,
    icons: {
      home: "/icons/home.svg",
      image: "/images/property6.jpg",
      video: "/videos/property6.mp4",
      view360: "/360/property6.html"
    }
  }
];
