import React, { useState } from 'react';
import {
  NavbarItem_Logo,
  NavbarItem_Navigation,
  Hamburger_Button
} from '../atoms'

const NavbarItems = ({navItems, sidebarFunction}) =>{

  // returns logo and navigation(Home, Services, About, Careers)

  return(
    <div style={styles.container}>
      <div className='navbar-item-logo-container' style={styles.navLogo}>
        <NavbarItem_Logo logo={navItems.logo} />
      </div>
      <div className='navbar-item-navigation-container' style={styles.navNavigation}>
        <NavbarItem_Navigation navigation={navItems.navigation} />
      </div>
        <Hamburger_Button sidebarFunction={sidebarFunction} />
    </div>
  )
}

const styles = {
  container:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '100%'
  },
  navLogo:{
    // flex: 2.5
  },
  navNavigation:{
    // flex: 1,
    height: '100%',
  }
}

export default NavbarItems;
