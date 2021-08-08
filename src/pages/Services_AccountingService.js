import React, { Component } from 'react';
import {
  Navbar,
  Footbar,
  Services_Header,
  Services_Main
} from '../components/organism';
import {
  AccountingServiceArticle_1
} from '../assets/images'

export class Services_AccountingService extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       article:{
         title: 'Accounting Service',
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
              <p>We adapt our audit services to fit your unique needs, but what doesn’t change is the exceptional service quality we deliver to all our clients. Whether you’re already at the top or you’re on your way up.</p>
            </div>
            <div className='services-article-content-paragraph'>
              <p>The quality of our start with each of our professional who have the breath of experience that comes from accounting in many industries and fastest growing companies and to whom we provide the best available ongoing personal and professional development.</p>
            </div>
            <div className='services-article-content-paragraph content-row'>
              <div className='services-article-content-paragraph content-row-left'>
                <p>Our tailored Accounting services can help you build trust and confidence through transparency clarity and consistency.</p>
              </div>
              <div className='services-article-content-paragraph content-row-right'>
                <img 
                  src={AccountingServiceArticle_1}
                />
              </div>
            </div>
            <div className='services-article-content-paragraph'>
              <p>We provide a consistent service by assembling the right team to address the most complex issues, using a proven global methodology and deploying the latest, high quality service and perspectives. Our professional team has been trained properly with standard of accounting and auditing.</p>
            </div>
            <div className='services-article-content-paragraph'>
              <p>And because we understand that, to achieve your potential, you need a tailored service as much as a consistent methodology, we work to give you the benefit of our deep sector knowledge, our full subject matter knowledge and the latest insights from our work worldwide.</p>
            </div>
            <div className='services-article-content-paragraph'>
              <p>We are committed to serving public companies, private companies and family business as well as companies poised for an IPO. We invite you to learn more.</p>
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
    // padding: '30px 140px 0px 140px',
  },
  footbar:{
    flex: 1,
  }
}

export default Services_AccountingService;
