import React, { Component } from 'react';
import {
  Services_Header,
  Navbar,
  Footbar,
  Services_Main
} from '../components/organism';
import {
  TaxServicesArticle_1
} from '../assets/images'

export class Services_TaxServices extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       article:{
         title: 'Tax Services',
         content: ''
       }
    }
  }
  
  render() {
    return (
      <div style={styles.pageContainer}>
        <Navbar {...this.props} />
        <main className='main-container'>
          <Services_Header />
          <Services_Main item={this.state.article} />
          <div className='services-article-content'>
            <div className='services-article-content-paragraph'>
              <p>Corporate income taxes can significantly impact a company’s cash flow, effective tax rate and risk profile. Our network of edicated state and local tax professionals combines technical knowledge with industry understanding and access to technologically advanced tools and methodologies.</p>
            </div>
            <div className='services-article-content-paragraph'>
              <img 
                src={TaxServicesArticle_1}
              />
            </div>
            <div className='services-article-content-paragraph'>
              <p>We identify risk areas and sustainable planning op- portunities for taxation throughout the tax lifecycle, helping you to address your local tax responsibilities and achieve your business goals in the local and around the world.</p>
            </div>
            <div className='services-article-content-paragraph'>
              <p>Our professional is effectively integrated with Tax team to give you the perspective and support you need to manage your global tax burden effectively. Our network of practitioners has indepth knowledge of both direct and indirect state and local taxes and offers a broad array of services, including:</p>
            </div>
            <div className='services-article-content-paragraph'>
              <div className='services-article-content-paragraph article-box'>
                <div className='services-article-content-paragraph article-box-title'>
                  <p>Employment Tax</p>
                </div>
                <div className='services-article-content-paragraph article-box-content'>
                  <p>Our expert can assist with:</p>
                  <p>Preparation, payment and submission of the employee’s annual income tax (<b>form 1721</b>) including preparation of the tax forms for each employee (<b>1721A1</b>)</p>
                </div>
              </div>
            </div>
            <div className='services-article-content-paragraph'>
              <div className='services-article-content-paragraph article-box'>
                <div className='services-article-content-paragraph article-box-title'>
                  <p>Corporate Income Tax</p>
                </div>
                <div className='services-article-content-paragraph article-box-content'>
                  <p>We will give you the advice of calculation of corporate income tax at the end of tax period. And help you on preparing from (<b>1770</b>)</p>
                </div>
              </div>
            </div>
            <div className='services-article-content-paragraph'>
              <div className='services-article-content-paragraph article-box'>
                <div className='services-article-content-paragraph article-box-title'>
                  <p>Value Added Taxes</p>
                </div>
                <div className='services-article-content-paragraph article-box-content'>
                  <p>We can fully support VAT compliance reports, identify the right partial exemption method and review accounting tax systems.</p>
                </div>
              </div>
            </div>
            
          </div>
        </main>
        <div style={styles.footbar}>
          <Footbar {...this.props} />
        </div>
      </div>
    )
  }
}

const styles = {
  pageContainer:{
    display: 'flex', 
    flexDirection: 'column', 
    position: 'absolute', 
    top: 0, 
    left: 0,
    height: '100%',
    width: '100%'
  },
  mainContainer:{
    marginTop: '101.92px',
    flex: 1,
    // padding: '30px 140px 0px 140px'
  },
  footbar:{
    flex: 1,
  }
}

export default Services_TaxServices
