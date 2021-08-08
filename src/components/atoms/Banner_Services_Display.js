import React, { useState, useEffect, useRef } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/Home.css';


const Banner_Services_Display = ({click}) =>{

  const goToTop = () =>{
    window.scrollTo({
      top: [0,0],
      behavior: 'smooth'
    })
  }

  const [items, setItems] = useState([
    {
      title: 'Accounting Services',
      caption: 'Our tailored Accounting services can help you build trust and confidence through transparency clarity and consistency.',
      url: '/services/AccountingService',
    },
    {
      title: 'Tax Services',
      caption: 'Our professional is effectively integrated with Tax team',
      url: '/services/TaxServices',
    },
    {
      title: 'Business Advisory',
      caption: 'ISA Advisory is continually seeking better ways of working',
      url: '/services/BusinessAdvisory',
    },
  ]);
  
  const [count, setCount] = useState(0)

  useEffect(()=>{
    const interval = setInterval(()=>{
      if(count==2){
        setCount(-1)
      }
      setCount(count => count+1)
    }, 5000);
    return () => clearInterval(interval)
  }, [count])
  
  

 
  return(
    <div className='services-outer'>
    {items.map((item, i)=>{
      return(
        <div className='services-display' >
          <div className='services-display-item-container' style={{transform: `translateX(-${500*count}%)`, transition: 'ease-out .5s'}}>
            <div key={i} className='services-display-item'>
              <div className='services-display-item-wrapper'>
                <p className='services-display-item-title'>{item.title}</p>
                <p className='services-display-item-caption'>{item.caption}</p>
                <Link
                  onClick={goToTop}
                  className='services-display-item-readmore'
                  to={item.url}
                >
                  <p 
                    className='services-display-item-readmore-text'
                  >Read More</p>
                </Link>

              </div>
            </div>
          </div>
        </div>
      )
    })}
    </div>
  )
}

export default Banner_Services_Display;
