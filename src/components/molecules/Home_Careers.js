import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/styles/Home.css';
import {
  Careers
} from '../../assets/images';
import {
  Content_Card,
  Background_Blur
} from '../atoms'



const Home_Careers = () =>{

  const goToTop = () =>{
    window.scrollTo({
      top: [0,0],
      behavior: 'smooth'
    })
  }


  const [content, setContent] = useState({
    title: 'Handling Various Industries',
    subtitle: 'PT Iradhi Solusindo Abadi (ISA) was established in 2019. ',
    caption: 'Our people have wide experiences in handling various industries such as trading, mining, manufacturing, service, IT, etc. The firm has two partners and more than ten staffs member. The partners and professional staffs are members of the Indonesia Accountant Association.'
  });

  const [contentButton, setContentButton] = useState({
    title: 'See Details',
    url: '/careers'
  });
  const buttonComp = <Link onClick={goToTop} to={contentButton.url} className='content-card-button'>{contentButton.title}</Link>;
  const [contentComponent, setContentComponent] = useState(
    {
      content_card: <Content_Card className='content-card-careers-item' title={content.title} subtitle={content.subtitle} caption={content.caption} button={buttonComp} />,
      insights_item: '',
      background: Careers,
      inner_height: '524px',
      inner_width: '1920px'
    }
  )

  return(
    <div className='home-careers'>
      <Background_Blur contentComponent={contentComponent} />
    </div>
  )
}

export default Home_Careers;
