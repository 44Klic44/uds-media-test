import styles from './UdsRating.module.scss'

const UdsRating = ({ value = 0 }) => {
  const stars = []
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(value)) {
      stars.push('uds-star-full')
    } else if (i - value <= 0.5) {
      
      stars.push('uds-star-half')
    } else {
      stars.push('uds-star-empty')
    }
  }

  return (
    <div className={styles.rating}>
      <div className={styles.stars}>
        {stars.map((icon, idx) => (
          <svg key={idx} className={styles.starSvg} width="18" height="18" aria-hidden="true">
            <use href={`/src/assets/icons/sprite.svg#${icon}`} />
          </svg>
        ))}
      </div>
      <span className={styles.value}>{value.toFixed(2)}</span>
    </div>
  )
}

export default UdsRating
