import { useState, useEffect } from 'react'
import styles from './UdsCard.module.scss'
import UdsRating from '../UdsRating/UdsRating'
import UdsButton from '../UdsButton/UdsButton'
import UdsModal from '../Modal/UdsModal'

const UdsCard = ({
  id,
  title,
  description,
  address,
  distance,
  metro,
  rating,
  link,
  image,
  favorite,
  showButton = false, 
  buttonText = "ПЕРЕЙТИ",
  icons = {},
  tabletTitle,     
  tabletImage,
  mobileTitle,
  mobileImage
}) => {
  const [isFav, setIsFav] = useState(!!favorite)
  const [hovered, setHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deviceType, setDeviceType] = useState('desktop') 

  useEffect(() => {
    const checkDeviceType = () => {
      const width = window.innerWidth
      if (width <= 480) {
        setDeviceType('mobile')
      } else if (width <= 1080) {
        setDeviceType('tablet')
      } else {
        setDeviceType('desktop')
      }
    }
    
    checkDeviceType()
    window.addEventListener('resize', checkDeviceType)
    return () => window.removeEventListener('resize', checkDeviceType)
  }, [])

  const getCurrentData = () => {
    if (deviceType === 'tablet') {
      return {
        title: tabletTitle || title,
        image: tabletImage || image
      }
    }
    if (deviceType === 'mobile') {
      return {
        title: mobileTitle || title,
        image: mobileImage || image
      }
    }
    return { title, image }
  }

  const toggleFav = (e) => {
    e.stopPropagation()
    setIsFav(prev => !prev)
  }

  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  const currentData = getCurrentData()
  const currentTitle = currentData.title
  const currentImage = currentData.image

  return (
    <>
      <article
        className={styles.card}
        onMouseEnter={() => deviceType === 'desktop' && setHovered(true)}
        onMouseLeave={() => deviceType === 'desktop' && setHovered(false)}
      >
        <div className={styles.imageWrap}>
          <img src={currentImage} alt={title} className={styles.image} />
          
         <a 
  href={icons.home || "#"} 
  className={styles.homeIcon}
  aria-label={`Перейти на главную страницу объекта ${currentTitle}`}
  onClick={(e) => {
    if (!icons.home || icons.home === "#") {
      e.preventDefault();
    }
  }}
>
  <svg color="#FF5D54" aria-hidden="Перейти на страницу культурного обьекта">
    <use xlinkHref="#uds-icon-home" />
  </svg>
</a>

 <div className={styles.topIcons}>
    <div className={styles.topIconsInner}>

      <a 
        href={icons.image || "#"} 
        className={styles.mediaLink}
        aria-label={`Посмотреть галерею изображений ${currentTitle}`}
        onClick={(e) => {
          if (!icons.image || icons.image === "#") {
            e.preventDefault();
          }
        }}
      >
        <svg className={styles.topIconsGallery} aria-hidden="true">
          <use xlinkHref="#uds-icon-image" />
        </svg>
      </a>
      
     
      <a 
        href={icons.view360 || "#"} 
        className={styles.mediaLink}
        aria-label={`3D тур по объекту ${currentTitle}`}
        onClick={(e) => {
          if (!icons.view360 || icons.view360 === "#") {
            e.preventDefault();
          }
        }}
      >
        <svg className={styles.topIconsGradus} aria-hidden="true">
          <use xlinkHref="#uds-icon-360" />
        </svg>
      </a>
      

      <a 
        href={icons.video || "#"} 
        className={styles.mediaLink}
        aria-label={`Видео об объекте ${currentTitle}`}
        onClick={(e) => {
          if (!icons.video || icons.video === "#") {
            e.preventDefault();
          }
        }}
      >
        <svg className={styles.topIconsVideo} aria-hidden="true">
          <use xlinkHref="#uds-icon-video" />
        </svg>
      </a>
    </div>
  </div>



          { description && deviceType === 'desktop' && (
            <div className={`${styles.bottomOverlay} ${hovered ? styles.visible : ''}`}>
              <p className={styles.description}>{description}</p>
            </div>
          )}
          { description && deviceType !== 'desktop' && (
            <button 
              className={styles.mobileDetailsButton}
              onClick={openModal}
              aria-label="Подробнее о культурном объекте"
            >
              <span>Подробнее</span>
            </button>
          )}
        </div>
        <div className={styles.body}>
          <div className={styles.titleRow}>
            <a href={link  || "#"} target="_blank" >          
                 <h3 className={styles.title}>{currentTitle}</h3>
            </a>
         

            <button  aria-label="Добавить в избранное"
              className={styles.iconsHeart} 
              onClick={toggleFav}
            >
              <svg aria-label="Добавить в избранное" className={styles.heartFavorite} >
                {isFav ? (
                  <use xlinkHref="#uds-icon-heart-filled" />
                ) : (
                  <use xlinkHref="#uds-icon-heart-outline" />
                )}
              </svg>
            </button>
          </div>
          {showButton && (
            <div className={styles.ctaWrap}>
              <UdsButton as="a" href={link}>{buttonText}</UdsButton>
            </div>
          )}
          <div className={styles.infoLine}>
            <div className={styles.infoItem}>
              <svg aria-label="Адрес культурного объекта" className={styles.infoIcon} width="15" height="18" color='#818181'><use xlinkHref="#uds-icon-address" /></svg>
              <span className={styles.infoText}>{address}</span>
            </div>
            <div className={styles.infoDistance} >
              <svg aria-label="Расстояние до культурного объекта" className={styles.infoIcon} width="13.39" height="15" color='#818181'><use xlinkHref="#uds-icon-distance" /></svg>
              <span className={styles.infoText}>{distance}</span>
            </div>
          </div>
          <div className={styles.infoMetro}>
            <div className={styles.infoItem}>
              <svg aria-label="Ближайшее метро возле культурного объекта" className={styles.infoIcon} width="22" height="32" color='#818181'><use xlinkHref="#uds-icon-metro" /></svg>
              <span className={styles.infoMetro}>{metro}</span>
            </div>
          </div>
         
          <div className={styles.infoDistanmob} >
            <svg aria-label="Расстояние до культурного объекта" className={styles.infoIcon} width="13.39" height="15" color='#818181'><use xlinkHref="#uds-icon-distance" /></svg>
            <span className={styles.infoText}>{distance}</span>
          </div>
          <div className={styles.ratingRow}>
            <UdsRating value={rating} />
          </div>
        </div>
      </article>
      <UdsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={currentTitle} 
      >
        <div className={styles.modalContentWrapper}>
          <div className={styles.modalMeta}>
            <div className={styles.modalAddress}>
              <svg width="16" height="16" aria-label="Адрес культурного обьекта"> 
                <use xlinkHref="#uds-icon-address" />
              </svg>
              {address}
            </div>
          </div>
          <div className={styles.modalDescription}>
            <h3 className={styles.descriptionTitle}>Описание</h3>
            <p>{description}</p>
          </div>
          <div className={styles.modalActions}>
            <UdsButton 
              as="a" 
              href={link}
              className={styles.modalButton}
              onClick={closeModal}
              aria-label="Посетить культурный объект"
            >
              ПОСЕТИТЬ ОБЪЕКТ
            </UdsButton>
          </div>
        </div>
      </UdsModal>
    </>
  )
}

export default UdsCard