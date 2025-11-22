import { useEffect } from 'react'
import styles from './UdsModal.module.scss'

const UdsModal = ({ 
  isOpen, 
  onClose, 
  title, 
  children, 
  maxWidth = '500px'
}) => {
  // Блокировка скролла при открытии модалки
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  // Закрытие по ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.keyCode === 27) onClose()
    }
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div 
      className={styles.modalOverlay} 
      onClick={handleOverlayClick}
    >
      <div 
        className={styles.modalContent}
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <button   
          className={styles.modalClose}
          onClick={onClose}
          aria-label="Закрыть модальное окно"
        >
          <svg  width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M18 6L6 18M6 6l12 12" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
            />
          </svg>
        </button>
        
        {title && (
          <div className={styles.modalHeader}>
            <h2 className={styles.modalTitle}>{title}</h2>
          </div>
        )}
        
        <div className={styles.modalBody}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default UdsModal