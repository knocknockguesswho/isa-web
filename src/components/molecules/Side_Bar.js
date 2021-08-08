import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../../assets/styles/Sidebar.css';

const Side_Bar = ({active, navigation}) =>{

  let location = useLocation().pathname;
  const goToTop = () =>{
    window.scrollTo({
      top: [0,0],
      behavior: 'smooth'
    })
    document.body.style.overflow = 'unset';
  }
  
  let loca = location.split('/')
  loca.pop()
  loca = loca.join('/')

  return(
    <div style={styles.container(active)} className='side-bar'>
      <div className='side-bar-item-navigation' style={styles.nav}>
          <Link 
            to={navigation[0].path}
            onClick={goToTop} 
            style={styles.navigator(navigation[0].path, location)}>
              {navigation[0].title}
          </Link>
          <Link 
            to={navigation[1].path}
            onClick={goToTop} 
            style={styles.navigator(navigation[1].path, loca)}>
              {navigation[1].title}
          </Link>
          <Link 
            to={navigation[2].path}
            onClick={goToTop} 
            style={styles.navigator(navigation[2].path, location)}>
              {navigation[2].title}
          </Link>
          <Link 
            to={navigation[3].path}
            onClick={goToTop} 
            style={styles.navigator(navigation[3].path, location)}>
              {navigation[3].title}
          </Link>
    </div>
    </div>
  )
}

const styles = {
  container:(active)=>({
    transform: active? 'translateX(0)' : 'translateX(100%)',
    display: active? 'block':'none',
  }),
  nav:{
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    listStyleType: 'none',
    backgroundColor: 'white',
    position: 'relative',
    height: '100vh',
    top: 0,
    bottom: 0
  },
  navigator: (path, location) =>({
    display: 'flex',
    textDecoration: 'none',
    flex: '1',
    fontFamily: 'Poppins, sans-serif',
    fontSize: 17,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    color: path==location? 'white' : '#303562',
    backgroundColor: path==location? '#303562' : 'white',
  })
}

export default Side_Bar;
