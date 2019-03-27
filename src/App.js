import React, { Component } from 'react';
import './App.css';
import Home from './components/Home/Home'
import Leasing from './components/Leasing/Leasing'
import {Route, Switch, Redirect} from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import BuildingPhotos from './components/BuildingPhotos/BuildingPhotos'
import BuildingInfo from './components/BuildingInfo/BuildingInfo';

class App extends Component {


  render() {
    
    let routes=(
      <Switch>
      <Route path='/building-photos' render={()=><BuildingPhotos/>}/>
      <Route path='/leasing' render={(props)=><Leasing {...props}/>}/>
      <Route path='/building-info' render={()=><BuildingInfo />}/>
      <Route path='/' exact component={Home}/>
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
