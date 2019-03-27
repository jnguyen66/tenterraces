import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active exact>Home</NavigationItem>
    <NavigationItem link='/building-info'>Building Info</NavigationItem>
    <NavigationItem link='/leasing' >Leasing</NavigationItem>
    <NavigationItem link='/building-photos'>Building Photos</NavigationItem>
    
  </ul>
)

export default navigationItems;
