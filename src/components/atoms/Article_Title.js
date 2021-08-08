import React, { useState } from 'react';
import '../../assets/styles/Services.css';
import {
  Clock
} from '../../assets/images'

const Article_Title = ({title}) =>{
  return(
    <div className='article-title'>
      <h5>{title}</h5>
      <div className='article-title-time-to-read'>
        <img 
          src={Clock}
        />
        <p>1 min read</p>
      </div>
    </div>
  )
}

export default Article_Title;
