import React, { useEffect, useState} from 'react'
import classNames from 'classnames';

// Styles
import styles from './NavigationBar.module.scss'

const NavigationBar = () => {
  
  const [show, setShow] = useState(false);

  const transitionNavbar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect (() => {
    window.addEventListener('scroll', transitionNavbar)
    return () => window.addEventListener('scroll', transitionNavbar)
  }, [])

  return (
    <>
      <div className={classNames({
        [styles.nav]: true,
        [styles.nav_Black]: show 
      })}>
        <div className={styles.nav_Content}>
          <img 
          className={styles.nav_Logo}
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" 
          alt="" 
          />
          <img 
          className={styles.nav_Avatar}
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" 
          alt="" 
          />
        </div>
      </div>
    </>
  )
}

export default NavigationBar