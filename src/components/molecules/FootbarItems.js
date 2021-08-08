import React, { useState } from 'react';
import '../../assets/styles/Footbar.css';
import{
  CompanyContacts,
  CompanyDetails,
  FootbarNavigation
} from '../atoms';


const FootbarItems = () =>{
  return(
    <>
      <div className='footbarItems'>
        <div className='footbarItems-companyDetails'>
          <CompanyDetails />
        </div>
        <div className='footbarItems-navigation'>
          <FootbarNavigation />
        </div>
        <div className='footbarItems-companyContacts'>
          <CompanyContacts />
        </div>
      </div>
    </>
  )
}

export default FootbarItems;