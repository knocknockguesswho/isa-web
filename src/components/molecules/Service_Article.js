import React, { useState } from 'react';
import '../../assets/styles/Services.css';
import {
  Article_Title,
} from '../atoms'

const Service_Article = ({article}) =>{
  return(
    <div className='services-article'>
      <div className='sercvices-article-title'>
        <Article_Title title={article.title} />
      </div>
    </div>
  )
}


export default Service_Article;
