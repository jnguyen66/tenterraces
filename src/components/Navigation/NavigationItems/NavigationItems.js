import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems = (props) =>(
  <ul className={classes.NavigationItems}>
    <NavigationItem link='/' active exact>HOME</NavigationItem>
    <NavigationItem link='/building-info'>BUILDING INFO</NavigationItem>
    <NavigationItem link='/leasing' >LEASING</NavigationItem>
    <NavigationItem link='/contact-us' >CONTACT US</NavigationItem>

    
  </ul>
)

export default navigationItems;
