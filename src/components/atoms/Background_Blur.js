import React, { useState } from 'react';
import '../../assets/styles/Home.css';


const Background_Blur = ({contentComponent}) =>{
  return(
    <>
    <div className='background-blur'>
      <div style={{backgroundImage:`url(${contentComponent.background})`, width: contentComponent.inner_width, height: contentComponent.inner_height}} className='background-blur-inner'>
        <div>
          <div className='background-blur-content-card'>
            {contentComponent.content_card}
          </div>
        </div>
      </div>
    </div>
    <div className='background-blur-item'>
      {contentComponent.insights_item}
    </div>
    </>
  )
}


export default Background_Blur;