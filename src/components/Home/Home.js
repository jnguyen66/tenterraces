import React from 'react';
import Button from '../UI/Button'
import classes from './Home.css'

const Home = props=>{
    return(
        <div>
            <div className={classes.Banner}>
                <Button btnType="Success">Hello</Button>
            </div>
            <div className={classes.BannerText}>
                <h3> Redesigned to meet the 21st Century</h3>
                <p>
                With over 120,000 square feet of commercial and conventional-style offices for lease within a sophisticated glass exterior, 
                the building plays host to a diverse and exclusive array of tenants. The 420 3rd St. commercial office building is the very 
                embodiment of office sophistication. Uniquely located at the edge of Little Tokyo in walking distance and easy metro access to 
                some of Downtown LA’s most dynamic neighborhoods: Civic Center, Arts District, The Geffen Contemporary, JANM, Walt Disney Concert Hall. 
                This 10 floor commercial real estate property also provides a healthy spectrum of lifestyle amenities. Some of the amenities include a 
                coffee shop, balcony suites, abundant parking and freeway / metro access with 24-hour building security.
                </p>
                <Button btnType="Contact">Contact Us</Button>
            </div>
        </div>
    )
}

export default Home;