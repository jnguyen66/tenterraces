import React from 'react'
import classes from './Brokers.css'

const brokers = ()=>{
    return (
        <div className={classes.Brokers}>
            <div><h4>George Crawford (Office)</h4>
            <p>gcrawford@kiddermathews.com</p>
            <p> 213-225-7212 </p></div>
            <div><h4>Chris Runyen (Office)</h4><p>crunyen@naicapital.com</p><p> 213-632-7715 </p></div>
            <div><h4>Tracy Taft (Retail)</h4><p>ttaft@naicapital.com</p><p> 213-632-7718 </p></div>
        </div>
    )
}

export default brokers;