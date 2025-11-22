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
  tabletTitle,     // добавляем новые пропсы
  tabletImage,
  mobileTitle,
  mobileImage
}) => {
  const [isFav, setIsFav] = useState(!!favorite)
  const [hovered, setHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [deviceType, setDeviceType] = useState('desktop') // 'desktop', 'tablet', 'mobile'

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

  // Функция для получения данных в зависимости от устройства
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

  // Получаем актуальные данные для текущего устройства
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
          {/* Используем currentImage вместо image */}
          <img src={currentImage} alt={currentTitle} className={styles.image} />

          {/* home icon */}
          <div className={styles.homeIcon}>
            <svg color="#FF5D54">
              <use xlinkHref="#uds-icon-home" />
            </svg>
          </div>

          {/* 3 icons */}
          <div className={styles.topIcons}>
            <div className={styles.topIconsInner}>
              <svg className={styles.topIconsGallery} aria-hidden="true" > <use xlinkHref="#uds-icon-image" /></svg>
              <svg className={styles.topIconsGradus} aria-hidden="true" > <use xlinkHref="#uds-icon-360" /></svg>
              <svg className={styles.topIconsVideo} aria-hidden="true" > <use xlinkHref="#uds-icon-video" /></svg>
            </div>
          </div>

          {/* Для десктопа: описание при ховере */}
          { description && deviceType === 'desktop' && (
            <div className={`${styles.bottomOverlay} ${hovered ? styles.visible : ''}`}>
              <p className={styles.description}>{description}</p>
            </div>
          )}

          {/* Для мобильных: кнопка открытия попапа */}
          { description && deviceType !== 'desktop' && (
            <button 
              className={styles.mobileDetailsButton}
              onClick={openModal}
              aria-label="Подробнее о объекте"
            >
              <span>Подробнее</span>
            </button>
          )}
        </div>

        <div className={styles.body}>
          <div className={styles.titleRow}>
            {/* Используем currentTitle вместо title */}
            <h3 className={styles.title}>{currentTitle}</h3>
            <button 
              className={styles.iconsHeart} 
              onClick={toggleFav}
            >
              <svg className={styles.heartFavorite} >
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
              <svg className={styles.infoIcon} width="15" height="18" color='#818181'><use xlinkHref="#uds-icon-address" /></svg>
              <span className={styles.infoText}>{address}</span>
            </div>
            <div className={styles.infoDistance} >
              <svg className={styles.infoIcon} width="13.39" height="15" color='#818181'><use xlinkHref="#uds-icon-distance" /></svg>
              <span className={styles.infoText}>{distance}</span>
            </div>
          </div>

          <div className={styles.infoMetro}>
            <div className={styles.infoItem}>
              <svg className={styles.infoIcon} width="22" height="32" color='#818181'><use xlinkHref="#uds-icon-metro" /></svg>
              <span className={styles.infoMetro}>{metro}</span>
            </div>
          </div>
         
          <div className={styles.infoDistanmob} >
            <svg className={styles.infoIcon} width="13.39" height="15" color='#818181'><use xlinkHref="#uds-icon-distance" /></svg>
            <span className={styles.infoText}>{distance}</span>
          </div>

          <div className={styles.ratingRow}>
            <UdsRating value={rating} />
          </div>
        </div>
      </article>

      {/* Модальное окно - используем currentTitle */}
      <UdsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={currentTitle}  // Используем currentTitle
      >
        <div className={styles.modalContentWrapper}>
          <div className={styles.modalMeta}>
            <div className={styles.modalAddress}>
              <svg width="16" height="16">
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