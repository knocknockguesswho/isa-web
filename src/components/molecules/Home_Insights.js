import React, { useState } from 'react';
import '../../assets/styles/Home.css';
import{
  Insights
} from '../../assets/images';
import{
 Insights_Item,
 Content_Card,
 Background_Blur
} from '../atoms'

const Home_Insights = () =>{

  const [content, setContent] = useState({
    title: 'Better Working World',
    subtitle: 'See how we can help build a better working world for you.',
    caption: 'At ISA, we are committed to delivering exceptional client service across our three service lines Accounting Service, Tax and Advisory'
  });

  const [contentComponent, setContentComponent] = useState(
    {
      content_card: <Content_Card className='content-card-insights-item' title={content.title} subtitle={content.subtitle} caption={content.caption} />,
      insights_item: <Insights_Item />,
      background: Insights,
      inner_height: '417px',
      inner_width: '1364px'
    }
  )

  return(
    <div className='home-insights'>
      <Background_Blur contentComponent={contentComponent} />
    </div>
  )
}

export default Home_Insights;
