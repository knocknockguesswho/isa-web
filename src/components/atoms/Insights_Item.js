import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
  AccountingServiceIcon,
  BusinessAdvisoryIcon,
  TaxServicesIcon
} from '../../assets/images';

const Insights_Item = () =>{


  const goToTop = () =>{
    window.scrollTo({
      top: [0,0],
      behavior: 'smooth'
    })
  }


  const [items, setItems] = useState([
    {
      title: 'Accounting Service',
      icon: AccountingServiceIcon,
      caption: 'Our tailored Accounting services can help you build trust and confidence through transparency clarity and consistency.',
      url: '/services/AccountingService'
    },
    {
      title: 'Tax Services',
      icon: TaxServicesIcon,
      caption: 'Our professional is effectively integrated with Tax team to give you the perspective and support you need to manage your global tax burden effectively.',
      url: '/services/TaxServices'
    },
    {
      title: 'Business Advisory',
      icon: BusinessAdvisoryIcon,
      caption: 'ISA Advisory is continually seeking better ways of working as we collaborate with clients to help them solve their complex industry issues and capitalize on opportunities to grow, optimize and protect their businesses. ',
      url: '/services/BusinessAdvisory'
    },
  ])

  return(
    <div className='insights-item-wrapper'>
      {items.map((item, i)=>{
        return(
          <div key={i} className='insights-item'>
        <div className='insights-item-flex-left'>
          <img 
            src={item.icon}
            className='insights-item-icon'
          />
        </div>
        <div className='insights-item-flex-right'>
          <div className='insights-item-flex-right-top'>
            <h5>{item.title}</h5>
            <p>{item.caption}</p>
          </div>
          <div className='insights-item-flex-right-bottom'>
            <Link onClick={goToTop} to={item.url} className='insights-item-flex-right-bottom-readmore'>
              <p>Read More</p>
            </Link>
          </div>
        </div>
      </div>
        )
      })}
    </div>
  )
}

export default Insights_Item;
