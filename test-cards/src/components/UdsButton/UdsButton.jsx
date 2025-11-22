import styles from './UdsButton.module.scss'

const UdsButton = ({ children, as = 'button', href, ...rest }) => {
  if (as === 'a') {
    return (
      <a className={styles.button} href={href} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <button aria-label='Перейти к культурному объекту'  className={styles.button} {...rest}>
      {children}
    </button>
  )
}

export default UdsButton
