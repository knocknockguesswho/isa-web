import React, { useState } from 'react';
import { Link, useLocation, useRouteMatch } from 'react-router-dom';
import '../../assets/styles/Services.css';

const Services_Header_Tab = (props) =>{

  const location = useLocation().pathname;
  const {path, url} = useRouteMatch()
  
  console.log(location, 'location')
  console.log(path, 'path')

  let loca = location.split('/')
  loca = loca.slice(2)
  loca = loca.toString()
  console.log(loca, 'loca')

  const [items, setItems] = useState([
    {
      title: 'Accounting Service',
      url: `AccountingService`,
    },
    {
      title: 'Tax Services',
      url: `TaxServices`,
    },
    {
      title: 'BusinessAdvisory',
      url: `BusinessAdvisory`,
    },
  ]);


  return(
    <div className='services-header-tab'>
      {items.map((item, i)=>{
        return(
        <Link to={item.url} style={styles.navigator(loca, item.url)} className='services-header-tab-item'>
          <p>{item.title}</p>
        </Link>
        )
      })}
    </div>
  )
}

const styles = {
  navigator: (path, location) =>({
    color: path==location? 'white' : '#4488C1',
    backgroundColor: path==location? '#4488C1' : 'white'
  })
}

export default Services_Header_Tab;
