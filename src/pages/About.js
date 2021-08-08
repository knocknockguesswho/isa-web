import React, { Component } from 'react';
import {
  Navbar,
  Footbar,
  About_Main
} from '../components/organism'

export class About extends Component {
  render() {
    return (
      <div style={styles.pageContainer}>
        <Navbar {...this.props} />
        <main style={styles.mainContainer}>
          <About_Main />
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
    // flex: 1
  },
  footbar:{
    flex: 1,
  }
}

export default About;
