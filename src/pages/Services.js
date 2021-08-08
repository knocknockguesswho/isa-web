import React, { useState } from 'react';
import '../assets/styles/Services.css'
import {
  Navbar,
  Footbar,
  Services_Header
} from '../components/organism';
import{
  Switch,
  Route,
  useRouteMatch,
  Link
} from 'react-router-dom';
import{
  Services_AccountingService,
  Services_TaxServices,
  Services_BusinessAdvisory,
} from '../pages';


const Services = (props) =>{
  let {path} = useRouteMatch()

  // const [routes, setRoutes] = useState([
  //   {
  //     path: `${path}/:param`,
  //     title: 'Accounting Service',
  //     comp: Services_AccountingService,
  //     isActive: false
  //   },
  //   {
  //     path: `${path}:param`,
  //     title: 'Tax Services',
  //     comp: Services_TaxServices,
  //     isActive: false
  //   },
  //   {
  //     path: `${path}:param`,
  //     title: 'Business Advisory',
  //     comp: Services_BusinessAdvisory,
  //     isActive: false
  //   },
  // ])

  window.location.replace(`${path}/AccountingService`)

  return(
    <>
      {/* <Link to={'/services/'+match.params}>Accounting Service</Link>
      <Link to={'/services/'+match.params}>Tax Services</Link>
      <Link to={'/services/'+match.params}>Business Advisory</Link> */}
      <Switch>
        {/* <Route path={routes[2].path}>
          <Services_BusinessAdvisory navigation={props.navigation} />
        </Route>
        <Route path={routes[1].path}>
          <Services_TaxServices navigation={props.navigation} />
        </Route>
        <Route exact={true} path={routes[0].path}>
          <Services_AccountingService navigation={props.navigation} />
        </Route> */}
        <Route exact={true} path='/services/:section' component={Services_AccountingService} />
        <Route  path='/services/:section' component={Services_TaxServices} />
        <Route  path='/services/:section' component={Services_BusinessAdvisory} />
      </Switch>
    </>
  )
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
    padding: '30px 0px 0px 140px'
  },
  footbar:{
    flex: 1,
  }
}

export default Services;
