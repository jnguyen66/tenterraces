import React from 'react';
import tenterracesLogo from '../../assets/images/tenterraces-logo.png';
import classes from './Logo.css';

const logo = (props) =>(
  <div className={classes.Logo}>
    <a rel="noopener noreferrer" href="/">  
    <img src={tenterracesLogo} alt='TenTerraces'/></a>
  </div>
)

export default logo;
