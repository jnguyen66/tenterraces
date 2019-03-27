import React from 'react';
import LeasingTable from './LeasingTable/LeasingTable'
import classes from './Leasing.css'

const leasing = props => {
    return(<div className={classes.Leasing}>
        <h2>Leasing</h2>
        <LeasingTable/>
        </div>
    )
}

export default leasing