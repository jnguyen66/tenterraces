import React, { Component } from 'react';
import './App.css';
import Leasing from './components/Leasing/Leasing'
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BuildingPhotos from './components/BuildingPhotos/BuildingPhotos'
import BuildingInfo from './components/BuildingInfo/BuildingInfo';
import ContactUs from './components/ContactUs/ContactUs';

class App extends Component {


  render() {
    
    let routes=(
      <Switch>
 
      <Route path='/leasing' render={(props)=><Leasing {...props}/>}/>
      <Route path='/building-info' render={()=><BuildingInfo />}/>
      <Route path='/contact-us' render={()=><ContactUs/>}/>
      <Route path='/' exact component={BuildingPhotos}/>
      <Redirect to='/'/>
      </Switch>
    )

    return (
      <div className="App">
      <Layout>
        {routes}
        </Layout>
      </div>
    );
  }
}

export default App;
