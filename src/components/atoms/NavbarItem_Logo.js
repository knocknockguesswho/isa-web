import React, { useState } from 'react';
import {Link} from 'react-router-dom';

const NavbarItem_Logo = ({logo}) =>{

  return(
    <Link
      to={'/'}
    >
      <img 
        style={styles.logoSize}
        src={logo}
      />
    </Link>
  )
}

const styles = {
  logoSize:{
    height: '1',
  }
}

export default NavbarItem_Logo;
