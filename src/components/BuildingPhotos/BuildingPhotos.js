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
            <p>Hello</p>
   
        </div>)
    
}
 
    
export default buildingPhotos;