import React, { useState, useEffect } from 'react';
import '../../assets/styles/Home.css'

const Content_Card = ({width, height, transform, title, padding, subtitle, caption, button}) =>{

  return(
    <div style={{transform: transform, padding}} className='content-card'>
      <h4>{title}</h4>
      <h3>{subtitle}</h3>
      <p>{caption}</p>
      {button}
    </div>
  )
}
export default Content_Card;
