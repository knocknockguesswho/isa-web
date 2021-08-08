import React, { useState } from 'react';
import '../../assets/styles/Services.css';
import {
  Services_Header_Items
} from '../molecules'

const Services_Header = () =>{
  return(
    <div className='services-header'>
      <Services_Header_Items />
    </div>
  )
}

export default Services_Header;
