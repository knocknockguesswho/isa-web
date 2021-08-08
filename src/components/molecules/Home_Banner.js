import React, { useState } from 'react';
import '../../assets/styles/Home.css';
import {
  Banner_Services_Display
} from '../atoms'
import {
  BannerBackground
} from '../../assets/images';

const Home_Banner = () =>{
  return(
    <>
      <div className='home-banner'>
        <div style={{backgroundImage:`url(${BannerBackground})`}} className='home-banner-background'>
          <div className='home-banner-services-display'>
            <Banner_Services_Display />
          </div>
        </div>
      </div>
      <div className='home-banner-caption'>
        <p>Commited Towards Solution</p>
      </div>
    </>
  )
}

export default Home_Banner;
