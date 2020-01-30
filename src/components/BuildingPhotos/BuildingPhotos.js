import React from 'react';
import classes from './BuildingPhotos.css';
import Slideshow from 'react-slidez';
import Home from '../Home/Home'


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
            slides={['http://tenterraces.com/static/media/slideshow1.jpg', 'http://tenterraces.com/static/media/slideshow2.jpg', 'http://tenterraces.com/static/media/slideshow3.jpg',
            'http://tenterraces.com/static/media/slideshow4.jpg', 'http://tenterraces.com/static/media/slideshow5.jpg', 'http://tenterraces.com/static/media/slideshow6.jpg',
            'http://tenterraces.com/static/media/slideshow7.jpg', 'http://tenterraces.com/static/media/slideshow8.jpg', 'http://tenterraces.com/static/media/slideshow9.jpg']}
            effect={'fade'}
            height={'100%'}
            width={'100%'}
            >
            </Slideshow>
            <Home/>
        </div>)
    
}
 
    
export default buildingPhotos;