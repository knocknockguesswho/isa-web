import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PersonalTouch,
  EntrepreneurialApproach,
  DecadesOfExperiences,
  GlobalReach
} from '../../assets/images'

const Home_Why_ISA = () =>{

  const goToTop = () =>{
    window.scrollTo({
      top: [0,0],
      behavior: 'smooth'
    })
  }

  return(
    <div className='why-isa'>
      <div className='why-isa-go-to-about' >
        <Link onClick={goToTop} to='/about' className='why-isa-go-to-about-button'><span style={{fontSize: '12px'}}>See Details</span></Link>
      </div>
      <div style={{backgroundImage:`url(${PersonalTouch})`}} className='why-isa-flex-left'>
        <div className='why-isa-flex-left-inner'>
          <h3>Personal Touch</h3>
          <h5>You will be looked after, personally, by partners.</h5>
        </div>
      </div>
      <div className='why-isa-flex-right'>
        <div className='why-isa-flex-right-top'>
          <div style={{backgroundImage:`url(${EntrepreneurialApproach})`}} className='why-isa-flex-right-top-1'>
            <div className='why-isa-flex-right-top-1-inner'>
              <h4>Entrepreneurial Approach</h4>
              <p>From members who are business owners</p>
            </div>
          </div>
          <div style={{backgroundImage:`url(${DecadesOfExperiences})`}} className='why-isa-flex-right-top-2'>
            <div className='why-isa-flex-right-top-2-inner'>
              <h4>Decades of Experience</h4>
              <p>Founded in 2019</p>
            </div>
          </div>
        </div>
        <div style={{backgroundImage:`url(${GlobalReach})`}} className='why-isa-flex-right-bottom'>
          <div className='why-isa-flex-right-bottom-inner'>
            <h3>Global Reach</h3>
            <h5>Across Every Continent</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home_Why_ISA;
