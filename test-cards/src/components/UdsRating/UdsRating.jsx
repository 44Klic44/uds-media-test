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
            {/* <use href={`/src/assets/icons/#${icon}`} /> */}
             <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M7.26719 11.4926C7.12153 11.416 6.94751 11.416 6.80185 11.4926L3.22897 13.3709C2.86216 13.5638 2.43344 13.2523 2.5035 12.8438L3.18586 8.86539C3.21368 8.70319 3.1599 8.53769 3.04206 8.42282L0.15154 5.60527C-0.145218 5.316 0.0185377 4.81201 0.428648 4.75242L4.42324 4.17197C4.5861 4.14831 4.72688 4.04602 4.79971 3.89845L6.58615 0.278731C6.76956 -0.0928918 7.29948 -0.0928907 7.48289 0.278732L9.26932 3.89845C9.34216 4.04602 9.48294 4.14831 9.64579 4.17197L13.6404 4.75242C14.0505 4.81201 14.2143 5.316 13.9175 5.60527L11.027 8.42282C10.9091 8.53769 10.8554 8.70319 10.8832 8.86539L11.5655 12.8438C11.6356 13.2523 11.2069 13.5638 10.8401 13.3709L7.26719 11.4926Z" fill="#FDD91C"/>
</svg>

          </svg>
        ))}
      </div>
      <span className={styles.value}>{value.toFixed(2)}</span>
    </div>
  )
}

export default UdsRating
