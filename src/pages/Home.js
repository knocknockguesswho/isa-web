import React, { Component, createRef } from 'react';
import {
  Link
} from 'react-router-dom';
import{
  Navbar,
  Footbar,
  Home_Main
} from '../components/organism'

export class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      height: null
    }
  }
  
  render() {
    return (
      <div style={styles.pageContainer}>
        <div className='navbar'>
          <Navbar {...this.props} />
        </div>
        <main style={styles.mainContainer}>
          <Home_Main />
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

export default Home;
