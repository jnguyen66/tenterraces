import React from 'react';
import tenterracesLogo from '../../assets/images/tenterraces-logo.png';
import classes from './Logo.css';

const logo = (props) =>(
  <div className={classes.Logo}>
    <img src={tenterracesLogo} alt='TenTerraces'/>
  </div>
)

export default logo;
