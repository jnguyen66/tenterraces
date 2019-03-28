import React from 'react';
import LeasingTable from './LeasingTable/LeasingTable'
import classes from './Leasing.css'
import Brokers from './Brokers/Brokers'

const leasing = props => {
    return(
    <div className={classes.Leasing}>
        <div className={classes.LeasingDiv}>
            <h2>Leasing</h2>
            <LeasingTable/>
            <Brokers/>
        </div>





    </div>
    )
}

export default leasing