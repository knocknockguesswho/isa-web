import React, { useState } from 'react';
import '../../assets/styles/Services.css';
import {
  Service_Article
} from '../molecules';

const Services_Main = ({item}) =>{
  return(
    <div className='services-main'>
      <Service_Article article={item} />
    </div>
  )
}

export default Services_Main;