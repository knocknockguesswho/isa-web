import React, { Component } from 'react';
import {
  Navbar,
  Footbar,
  Careers_Main
} from '../components/organism';

export class Careers extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  
  render() {
    return (
      <div style={styles.pageContainer}>
        <Navbar {...this.props} />
        <main style={styles.mainContainer}>
          <Careers_Main />
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
    flex: 1
  },
  footbar:{
    flex: 1,
  }
}

export default Careers;
