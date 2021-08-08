import React, { useState } from 'react';
import '../../assets/styles/Navbar.css';
import {
  Logo
} from '../../assets/images'
import {
  NavbarItems,
  Side_Bar
} from '../molecules';

const Navbar = (props) =>{

  const [navItems, setNavItems] = useState({
    logo: Logo,
    navigation: props.navigation
  })

  const [active, setActive] = useState(false)

  const handleSideBar = (active) =>{
    setActive(active)
  }

  return(
    <>
      <div className='navbar'>
        <div className='navbar-items'>
          <NavbarItems navItems={navItems} sidebarFunction={handleSideBar} />
        </div>
      </div>
      <div style={{width: '96%'}}>
        <Side_Bar active={active} navigation={navItems.navigation} />
      </div>
    </>
  )
}

export default Navbar;
