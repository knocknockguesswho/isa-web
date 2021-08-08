import React, {useState} from 'react';
import{
  Switch,
  Route,
} from 'react-router-dom';
import{
  Home,
  About,
  Careers,
  Services,
  Services_AccountingService,
  Services_TaxServices,
  Services_BusinessAdvisory,
} from '../pages';



const AppRoutes = (props) =>{


  const [routes, setRoutes] = useState([
    {
      path: '/',
      title: 'Home',
      comp: Home,
      isActive: false
    },
    {
      path: '/services',
      title: 'Services',
      comp: Services,
      isActive: false
    },
    {
      path: '/about',
      title: 'About',
      comp: About,
      isActive: false
    },
    {
      path: '/careers',
      title: 'Careers',
      comp: Careers,
      isActive: false
    },
    {
      path: '/services/AccountingService',
      title: 'Accounting Service',
      comp: Services_AccountingService,
      isActive: false
    },
    {
      path: '/services/TaxServices',
      title: 'Tax Services',
      comp: Services_TaxServices,
      isActive: false
    },
    {
      path: '/services/BusinessAdvisory',
      title: 'Business Advisory',
      comp: Services_BusinessAdvisory,
      isActive: false
    },
  ])

  const [nav, setNav] = useState(
    [
      {
        path: '/',
        title: 'Home',
        comp: Home,
        isActive: false
      },
      {
        path: '/services',
        title: 'Services',
        comp: Services,
        isActive: false
      },
      {
        path: '/about',
        title: 'About',
        comp: About,
        isActive: false
      },
      {
        path: '/careers',
        title: 'Careers',
        comp: Careers,
        isActive: false
      },
    ]
  )
  

  return(
    <Switch>
      {routes.map((route, i)=>{
        return(
          <Route key={i} exact={true} path={route.path}>
            {<route.comp navigation={nav} {...props} />}
          </Route>
        )
      })}
    </Switch>
  )
}

export default AppRoutes;