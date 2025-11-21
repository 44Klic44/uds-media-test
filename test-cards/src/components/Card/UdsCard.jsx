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
  icons = {}
}) => {
  const [isFav, setIsFav] = useState(!!favorite)
  const [hovered, setHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 1024)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

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

  return (
    <>
      <article
        className={styles.card}
        onMouseEnter={() => !isMobile && setHovered(true)}
        onMouseLeave={() => !isMobile && setHovered(false)}
      >
        <div className={styles.imageWrap}>
          <img src={image} alt={title} className={styles.image} />

          {/* home icon */}
          <div className={styles.homeIcon}>
            <svg width="58" height="59" color="#FF5D54">
              <use xlinkHref="#uds-icon-home" />
            </svg>
          </div>

          {/* 3 icons */}
          <div className={styles.topIcons}>
            <div className={styles.topIconsInner}>
              <svg aria-hidden="true" width="22.47" height="19"> <use xlinkHref="#uds-icon-image" /></svg>
              <svg aria-hidden="true" width="30" height="28"> <use xlinkHref="#uds-icon-360" /></svg>
              <svg aria-hidden="true" width="22" height="14"> <use xlinkHref="#uds-icon-video" /></svg>
            </div>
          </div>

          {/* Для десктопа: описание при ховере */}
          { description && (
            <div className={`${styles.bottomOverlay} ${hovered ? styles.visible : ''}`}>
              <p className={styles.description}>{description}</p>
            </div>
          )}

          {/* Для мобильных: кнопка открытия попапа */}
          { description && (
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
            <h3 className={styles.title}>{title}</h3>
            <button 
              className={styles.iconsHeart} 
              onClick={toggleFav}
            >
              <svg width="26" height="24">
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
            <div className={styles.infoItem} style={{ marginLeft: 30 }}>
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

          <div className={styles.ratingRow}>
            <UdsRating value={rating} />
          </div>
        </div>
      </article>

      {/* Модальное окно для описания на мобильных */}
      <UdsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={title}
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