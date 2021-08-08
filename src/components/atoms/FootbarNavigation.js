import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/Footbar.css'

const FootbarNavigation = () =>{

  const goToTop = () =>{
    window.scrollTo({
      top: [0,0],
      behavior: 'smooth'
    })
  }

  return(
    <>
      <div className='footbarNavigation'>
        <div className='footbarNavigation-services'>
          <div className='footbarNavigation-item'>
            <p>Services</p>
            <div className='footbarNavigation-about-link'>
              <Link onClick={goToTop} to='/services/AccountingService'>Accounting Service</Link>
              <Link onClick={goToTop} to='/services/TaxServices'>Task Services</Link>
              <Link onClick={goToTop} to='/services/BusinessAdvisory'>Business Advisory</Link>
            </div>
          </div>
        </div>
        <div className='footbarNavigation-about'>
          <div className='footbarNavigation-item'>
            <p>About</p>
            <div className='footbarNavigation-about-link'>
              <Link onClick={goToTop} to='/about'>Work Philosophy</Link>
              <Link onClick={goToTop} to='/about'>History</Link>
              <Link onClick={goToTop} to='/about'>Our Difference</Link>
            </div>
          </div>
        </div>
        <div className='footbarNavigation-careers'>
          <div className='footbarNavigation-item'>
            <p>Careers</p>
            <div className='footbarNavigation-about-link'>
              <Link onClick={goToTop} to='/careers'>Isa's Role</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FootbarNavigation;
