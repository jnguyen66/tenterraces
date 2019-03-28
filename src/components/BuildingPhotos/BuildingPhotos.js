import React from 'react';
import classes from './BuildingPhotos.css';
import Slideshow from 'react-slidez';



const buildingPhotos = props =>{


    return(
       <div className={classes.BuildingPhotos}>
     
           <Slideshow
            showIndex
            showArrows={false}
            autoplay
            enableKeyboard
            useDotIndex
            slideInterval={5000}
            defaultIndex={1}
            slides={['http://tenterraces.com/photos/slideshow1.jpg', 'http://tenterraces.com/photos/slideshow2.jpg', 'http://tenterraces.com/photos/slideshow3.jpg', 'http://tenterraces.com/photos/slideshow4.jpg'
            , 'http://tenterraces.com/photos/slideshow5.jpg', 'http://tenterraces.com/photos/slideshow6.jpg', 'http://tenterraces.com/photos/slideshow7.jpg', 'http://tenterraces.com/photos/slideshow8.jpg'
            , 'http://tenterraces.com/photos/slideshow9.jpg']}
            effect={'fade'}
            height={'100%'}
            width={'100%'}
            >
            </Slideshow>
            <div className={classes.Banner}>
            <div className={classes.BannerText}>
                <h3> <u>Redesigned to meet the 21st Century</u></h3>
                <p>
                With over 120,000 square feet of commercial and conventional-style offices for lease within a sophisticated glass exterior, 
                the building plays host to a diverse and exclusive array of tenants. The 420 3rd St. commercial office building is the very 
                embodiment of office sophistication. Uniquely located at the edge of Little Tokyo in walking distance and easy metro access to 
                some of Downtown LA’s most dynamic neighborhoods: Civic Center, Arts District, The Geffen Contemporary, JANM, Walt Disney Concert Hall. 
                This 10 floor commercial real estate property also provides a healthy spectrum of lifestyle amenities. Some of the amenities include a 
                coffee shop, balcony suites, abundant parking and freeway / metro access with 24-hour building security.
                </p>
              
            </div>
        </div>
        </div>)
    
}
 
    
export default buildingPhotos;