import React, { useState } from 'react';
import {Link, useLocation} from 'react-router-dom';

const NavbarItem_Navigation = ({navigation}) =>{
  
  let location = useLocation().pathname;
  const goToTop = () =>{
    window.scrollTo({
      top: [0,0],
      behavior: 'smooth'
    })
  }
  
  let loca = location.split('/')
  loca.pop()
  loca = loca.join('/')

  return(
    <div className='navbar-item-navigation' style={styles.nav}>
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
  )
}

const styles = {
  nav:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    listStyleType: 'none',
    backgroundColor: 'white',
    height: '100%',
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
    color: '#303562',
    borderBottom: path==location? 'solid 3px #303562' : 'none',
  })
}

export default NavbarItem_Navigation;