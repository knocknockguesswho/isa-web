import React, { useState } from 'react';
import '../../assets/styles/About.css';
import {
  AboutBrochurePoint
} from '../../assets/images'

const About_Main = () =>{

  return(
    <div className='about-main'>
      <p className='about-main-title'>About</p>
      <div className='brochure-point'>
        <div className='brochure-point-title'>
          <p>Work Philosophy</p>
        </div>
        <div className='brochure-point-content'>
          <p>The work is executed under the service framework approach, and therefore, all staff abide by the following commitment:</p>
          <ul>
            <li>Integrity and objective mental attitude</li>
            <li>Work accomplishment with full professional capabilities</li>
            <li>Strictly abide by code of ethic, professional standard and Company’s policy</li>
          </ul>
          <img 
            src={AboutBrochurePoint}
          />
        </div>
      </div>
      <div className='brochure-point'>
        <div className='brochure-point-title'>
          <p>Our History</p>
        </div>
        <div className='brochure-point-content'>
          <p>Since 2016, Our partners start business accounting and tax service for small or medium enterprise. After 3years the partners decides to establish PT Iradhi Solusindo Abadi (ISA) to make the deliverable service is excellent.</p>
        </div>
      </div>
      <div className='brochure-point'>
        <div className='brochure-point-title'>
          <p>Our Difference</p>
        </div>
        <div className='brochure-point-content'>
          <p>ISA has grown into reputable accounting firms, with a history built on close friendships and collaborationthroughout the network.</p>
          <p>ISA offer clients the personal support at partner level that big firms cannot match. Just like their clients our members are business owners who understand the highs and lows of entrepreneurial endeavour. Typical clients are family businesses, entrepreneurs, multina- tional corporation and fast growth enterprises.</p>
          <p>Together with our personal touch, entrepreneurial approach all go to make the ISA difference.</p>
        </div>
      </div>
      <div className='brochure-point'>
        <div className='brochure-point-title'>
          <p>Why ISA?</p>
        </div>
        <div className='brochure-point-content'>
          <div className='brochure-point-content-with-subtitle'>
            <h5>Personal Touch</h5>
            <p>If you work with ISA, you will be looked after, personally, by partners. That is how we work because that is the only way to run a professional business based on trust. Whether your needs are complex or just need one of our firms to make a quick phone call to a fellow member around the globe, our member firms are support you willingly.</p>
            <p>We want you to feel that you can call your ISA’s advisers any time, to celebrate the victories and share the challenges. For many clients, ISA partners are the first people they turn to when they have a business problem. It's as personal as that.</p>
          </div>
          <div>
            <h5>Entrepeneurial Spirit</h5>
            <p>Go to any ISA meeting around the world and you will meet a group of entrepreneurs who are also highly skilled auditors, tax advisers, accountants and consultants. Like many of our clients, most of our member firms are mid-sized or even small companies. The partners of our member firms share exactly the same concerns as you do in your business. They understand the highs of success but also the challenges and sometimes, like you, lie awake at night worrying about them too.</p>
            <p>We know what your business means to you and, most probably, your family - the pride, the excitement and, occasionally, the anxiety.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About_Main;