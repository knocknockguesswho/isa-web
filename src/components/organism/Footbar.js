import React, { useState } from 'react';
import '../../assets/styles/Footbar.css';
import {
  FootbarItems
} from '../molecules'

const Footbar = () =>{
  return(
    <div className='footbar'>
      <div className='footbar-items-container'>
        <FootbarItems />
      </div>
      <div className='footbar-copyright'>
        <p>© 2020 PT Iradhi Solusindo Abadi, All Rights Reserved.</p>
      </div>
    </div>
  )
}

export default Footbar;
