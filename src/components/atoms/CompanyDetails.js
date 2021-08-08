import React, { useState } from 'react';
import '../../assets/styles/Footbar.css'
import{
  LogoNamed
} from '../../assets/images';

const CompanyDetails = () =>{
  return(
    <div className='footbar-company-details'>
      <img 
        src={LogoNamed}
        style={{height: '1'}}
      />
      <p>
        Gedung Epiwalk Lt.5, Unit B547-548, Jln. H. R. Rasuna Said Rt.2/Rw/5, Karet Kuningan, Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12940.<br/>
        <b>info@iradhi.com</b>
      </p>
    </div>
  )
}

// const styles = {
//   address:{
//     fontSize: '15px',
//     lineHeight: '20px'
//   }
// }

export default CompanyDetails;
