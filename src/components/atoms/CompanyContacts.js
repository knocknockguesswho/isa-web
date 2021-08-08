import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/Footbar.css';
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Email,
  Whatsapp
} from '../../assets/images';

const CompanyContacts = () =>{

  const [socials, setSocials] = useState([
    {
      item: Facebook,
      url: '#'
    },
    {
      item: Instagram,
      url: '#'
    },
    {
      item: Twitter,
      url: '#'
    },
    {
      item: Youtube,
      url: '#'
    },
  ])

  const [privates, setPrivates] = useState([
    {
      name: 'Email',
      item: Email,
      url: 'https://mail.google.com/mail/?view=cm&fs=1&to=info@iradhi.com&su=SUBJECT&body=BODY'
    },
    {
      name: 'Whatsapp',
      item: Whatsapp,
      url: 'https://wa.me/6285883360420'
    },
  ])

  return(
    <div className='company-contacts'>
      <p className='company-contacts-title'>Follow Us</p>
      <div className='company-contacts-social-container'>
        {socials.map((social, i)=>{
          return(
            <Link key={i} to={social.url} style={{textDecoration: 'none'}}>
              <img 
                src={social.item}
                className='company-contacts-social-item'
              />
            </Link>
          )
        })}
      </div>
      <div className='company-contacts-private-container'>
        {privates.map((contact, i)=>{
          return(
            <a
              key={i}
              href={contact.url}
              target='blank'
              className='company-contacts-private-item'
            >
              <div className='company-contacts-private-item-icon'>
                <img 
                  src={contact.item}
                  style={{height: '1'}}
                />
              </div>
              <div className='company-contacts-private-item-text'>
                <p>Contact Via {contact.name}</p>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export default CompanyContacts;