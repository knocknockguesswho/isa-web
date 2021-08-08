import React, { useState } from 'react';
import '../../assets/styles/Sidebar.css'

const Hamburger_Button = ({sidebarFunction}) =>{

  const [isCrossing, setCrossing] = useState(false)

  const goToTop = () =>{
    window.scrollTo({top: [0,0]})
  }

  const handleHamburger = () =>{
    goToTop()
    setCrossing(!isCrossing)
    sidebarFunction(!isCrossing)
    document.body.style.overflow = !isCrossing? 'hidden' : 'unset';
  }

  return(
    <div>
      <div onClick={handleHamburger} style={styles.container(isCrossing)} className='hamburger-button'>
        <div style={styles.top(isCrossing)}></div>
        <div style={styles.middle(isCrossing)}></div>
        <div style={styles.bottom(isCrossing)}></div>
      </div>
    </div>
  )
}

const styles = {
  container:(isCrossing)=>({
    transform: isCrossing? 'translateX(8px)' : 'translateX(0)'
  }),
  top:(isCrossing)=>({
    transform: isCrossing? 'rotate(45deg) translate(-8px, -4px)' : 'none',
    transformOrigin: isCrossing? '0 0' : ''
  }),
  middle:(isCrossing)=>({
    display: isCrossing? 'none' : 'block'
  }),
  bottom:(isCrossing)=>({
    transform: isCrossing? 'rotate(-45deg) translate(-5px, 0)' : 'none',
    transformOrigin: isCrossing? '0 100%' : ''
  })
}

export default Hamburger_Button;