import { useState } from 'react'
import styles from './UdsCard.module.scss'
import UdsRating from '../UdsRating/UdsRating'
import UdsButton from '../UdsButton/UdsButton'


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
  icons = {}
}) => {
  const [isFav, setIsFav] = useState(!!favorite)
  const [hovered, setHovered] = useState(false)

  const toggleFav = (e) => {
    e.stopPropagation()
    setIsFav(prev => !prev)
   
  }

  return (
    <article
      className={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={styles.imageWrap}>
        <img src={image} alt={title} className={styles.image} />

        {/* home icon */}
        <div className={styles.homeIcon}>
           <svg width="58" height="58" color="#FF5D54">
            <use xlinkHref="#uds-icon-home" />
          </svg>
        </div>

        {/*  3 icons */}
        <div className={styles.topIcons}>
          <div className={styles.topIconsInner}>
            <svg aria-hidden="true" width="22.47" height="19"> <use xlinkHref="#uds-icon-image" /></svg>
            <svg aria-hidden="true" width="30" height="28"> <use xlinkHref="#uds-icon-360" /></svg>
            <svg aria-hidden="true" width="22" height="14"> <use xlinkHref="#uds-icon-video" /></svg>
          </div>
        </div>

        {/* text*/}
        <div className={styles.bottomOverlay}>
          <p className={styles.description}>{description}</p>
        </div>
      </div>

      <div className={styles.body}>
        <div className={styles.titleRow}>
          <h3 className={styles.title}>{title}</h3>

          <button
            className={`${styles.favBtn} ${isFav ? styles.favActive : ''}`}
            onClick={toggleFav}
            aria-pressed={isFav}
            aria-label={isFav ? 'Убрать из избранного' : 'Добавить в избранное'}
          >
            <svg width="24" height="22" aria-hidden="true">
              <use href="/src/assets/icons/sprite.svg#uds-icon-heart" />
            </svg>
          </button>
        </div>

        {/* Появляющаяся кнопка при hover */}
        <div className={`${styles.ctaWrap} ${hovered ? styles.ctaVisible : ''}`}>
          <UdsButton as="a" href={link}>ПЕРЕЙТИ</UdsButton>
        </div>

        <div className={styles.infoLine}>
          <div className={styles.infoItem}>
            <svg className={styles.infoIcon} width="15" height="18"><use href="/src/assets/icons/sprite.svg#uds-icon-address" /></svg>
            <span className={styles.infoText}>{address}</span>
          </div>

          <div className={styles.infoItem} style={{ marginLeft: 30 }}>
            <svg className={styles.infoIcon} width="15" height="18"><use href="/src/assets/icons/sprite.svg#uds-icon-distance" /></svg>
            <span className={styles.infoText}>{distance}</span>
          </div>
        </div>

        <div className={styles.infoLine}>
          <div className={styles.infoItem}>
            <svg className={styles.infoIcon} width="15" height="18"><use href="/src/assets/icons/sprite.svg#uds-icon-metro" /></svg>
            <span className={styles.infoText}>{metro}</span>
          </div>
        </div>

        <div className={styles.ratingRow}>
          <UdsRating value={rating} />
        </div>
      </div>
    </article>
  )
}

export default UdsCard
