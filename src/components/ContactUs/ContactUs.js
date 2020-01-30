import React from 'react';
import classes from './ContactUs.css';
import  MapContainer  from '../MapContainer/MapContainer'
import ContactForm from './ContactForm/ContactForm'

const contactUs = () =>{


    return(
    <div className={classes.Background}>
       <div className={classes.Contact}>
        <div>
        <h5>Ai Management</h5>
        <span>Justin Nguyen (Justin@AiManagementCo.com)</span>
        <span>Property Manager</span>
        <span>420 E. 3rd St. Ste 600</span>
        <span>Los Angeles, CA 90013</span>
        <span>213-379-4418</span>
       <p></p>
        <h5>Nai Capital and Kidder Matthews</h5>
        <span>Chris Runyen (Crunyen@naicapital.com)</span>
        <span>George Crawford (Gcrawford@kiddermathews.com)</span>
        <span>601 S. Figueroa St. Suite 3825</span>
        <span>Los Angeles, CA 90017</span>
        <span>213-632-7700</span>
   
        </div>
        <div>
        <ContactForm/>
        
        </div>
        </div>
        <br/>
        <br/>
        <MapContainer/>
        </div>
        )
    
}
 
    
export default contactUs;