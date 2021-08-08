import React, { Component } from 'react';
import {
  Services_Header,
  Navbar,
  Footbar,
  Services_Main
} from '../components/organism';

export class Services_BusinessAdvisory extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      article:{
        title: 'Business Advisory',
        content: ''
      }
    }
  }

  componentDidUpdate(){}
  
  render() {

    return (
      <>
      <div style={styles.pageContainer}>
        <Navbar {...this.props} />
        <main className='main-container'>
          <Services_Header />
          <Services_Main item={this.state.article} />
          <div className='services-article-content'>
            <div className='services-article-content-paragraph'>
              <p>In a world of unprecedented complexity and opportunity, organizations are looking to make new connections and find new ways of innovating. ISA Advisory is continually seeking better ways of working as we collaborate with clients to help them solve their complex industry issues and capitalize on opportunities to grow, optimize and protect their businesses. Our collaborative approach, combined with our global connectivity and  understanding  of industry issues, inspires us to ask better questions, design better answers and realize longlasting results.</p>
            </div>
            <div className='services-article-content-paragraph'>
              <div className='services-article-content-paragraph article-box'>
                <div className='services-article-content-paragraph article-box-title'>
                  <p>Corporate Finance</p>
                </div>
                <div className='services-article-content-paragraph article-box-content'>
                  <p>Our professionals provide merger and acquisition, and private equity advice from a base of deep industry knowledge. We have advised companies on the issue and listing of securities on the Indonesia equity markets. We have acted as financial advisors for companies raising funds or evaluating thecomplex financial implications of proposed transactions.</p>
                </div>
              </div>
            </div>
            <div className='services-article-content-paragraph'>
              <div className='services-article-content-paragraph article-box'>
                <div className='services-article-content-paragraph article-box-title'>
                  <p>Project Finance & Privatisation</p>
                </div>
                <div className='services-article-content-paragraph article-box-content'>
                  <p>Our resources are recognised and respected in Indonesia. At the request by conglomerate group that we have provided resources to advise on privatisation of the Company and project financing.</p>
                </div>
              </div>
            </div>
            <div className='services-article-content-paragraph'>
              <div className='services-article-content-paragraph article-box'>
                <div className='services-article-content-paragraph article-box-title'>
                  <p>Corporate Value Consulting</p>
                </div>
                <div className='services-article-content-paragraph article-box-content'>
                  <p>We have a team of professionals who work with our clients tomaximise their corporation's value in today's rapidly changing world. Our services include business valuations, due diligence investigations and the preparation of financial projections and budgets.</p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <div style={styles.footbar}>
          <Footbar {...this.props} />
        </div>
      </div>
      </>
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

export default Services_BusinessAdvisory
