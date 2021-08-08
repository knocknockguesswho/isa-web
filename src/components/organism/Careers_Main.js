import React, { useState } from 'react';
import '../../assets/styles/Careers.css';

const Careers_Main = () =>{
  return(
    <div className='careers-main'>
      <p className='careers-main-title'>Careers</p>
      <div className='brochure-point'>
        <div className='brochure-point-title'>
          <p>Isa's Role</p>
        </div>
        <div className='brochure-point-content'>
          <p>PT Iradhi Solusindo Abadi (ISA) was established in 2019. Our people have wide experiences in handling various industries such as trading, mining, manufacturing, service, IT, etc.</p>
          <p>The firm has two partners and more than ten staffs member. The partners and professional staffs are members of the Indonesia Accountant Association. The firm provides tax, accounting service, merger, acquisition analysis, business modeling, outsourcing related to financial administration and Technology Information and other related services. Client of the firm ranges from individuals to multinational corporation and listed companies engaged in various type of business.</p>
        </div>
      </div>
    </div>
  )
}

export default Careers_Main;