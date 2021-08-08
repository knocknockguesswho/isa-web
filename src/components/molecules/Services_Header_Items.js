import React, { useState } from 'react';
import {
  Services_Header_Tab,
  Services_Header_Title
} from '../atoms'

const Services_Header_Items = () =>{

  return(
    <div className='services-header-items'>
      <Services_Header_Title />
      <Services_Header_Tab  />
    </div>
  )
}

export default Services_Header_Items;
