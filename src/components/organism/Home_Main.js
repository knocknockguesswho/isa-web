import React, { useState } from 'react';
import '../../assets/styles/Home.css';
import{
  Home_Banner,
  Home_Why_ISA,
  Home_Insights,
  Home_Careers
} from '../molecules';

const Home_Main = () =>{
  return(
    <>
      <div className='home-main'>
        <div className='home-main-banner'>
          <Home_Banner />
        </div>
        <div className='home-main-content'>
          <p className='home-main-content-title'>Why ISA?</p>
          <Home_Why_ISA />
        </div>
        <div className='home-main-content'>
          <p className='home-main-content-title'>Insights</p>
          <Home_Insights />
        </div>
        <div className='home-main-content'>
          <p className='home-main-content-title'>Careers</p>
          <Home_Careers />
        </div>
      </div>
    </>
  )
}

export default Home_Main;