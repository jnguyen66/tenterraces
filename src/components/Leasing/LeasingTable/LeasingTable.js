import React from 'react';
import classes from './LeasingTable.css'
import floorplan from '../../../assets/images/floorplan.png'

const leasingTable = props => {
   return(
    <div>
   <title>Page Title</title>
   <table className={classes.LeasingTable} >
   <tbody>
        <tr>
            <th>Suite</th>
            <th>Size SF</th>
            <th>Floorplans</th>
            <th>Comments</th>
        </tr>

        <tr>
            <td>130</td>
            <td>7115</td>
            <td  align ="center"><a target="_blank" rel="noopener noreferrer" href="http://tenterraces.com/floorplans/130.png"><p></p>
            <img className={classes.photo} alt='floorplan' src={floorplan}/></a>
            </td>
            <td>Retail space ground floor space with lots of windows store frontage</td>
        </tr>
        <tr><td>608</td>
            <td>3,888</td>
            <td align ="center"><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.com/floorplans/608.pdf"><p></p>
            <img className={classes.photo} alt='floorplan' src={floorplan}/></a></td>
            <td>Open floor plan. Indendent HVAC system. Private Balcony. 3 different entrance and exits</td>  
        </tr>
        
        <tr><td>704</td>
            <td>3,022</td>
            <td align ="center"><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.com/floorplans/704.png"><p></p>
            <img className={classes.photo} alt='floorplan' src={floorplan}/></a></td>
            <td>Open rectangular floor plan with stunning views of Downtown LA and an exclusive patio</td>  
        </tr>

        <tr><td>801</td>
            <td>3,434</td>
            <td align ="center"><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.com/floorplans/801.png"><p></p>
            <img className={classes.photo} alt='floorplan' src={floorplan}/></a></td>
            <td>2 windowed offices, 7 windowed exam rooms, 2 kitchens, X-ray lab, restroom, enclosed reception, receptionist work area</td>
        </tr>
        <tr>
        <td>803</td>
            <td>1,002</td>
            <td align ="center"><a target="_blank" rel="noopener noreferrer" href="http://tenterraces.com/floorplans/803.png"><p></p>
            <img className={classes.photo} alt='floorplan' src={floorplan}/>
            </a></td>
            <td>Large Open Entry Area, Kitchenette Hook Ups, 3 Offices, good window line</td>
        </tr>

        <tr><td>807</td>
            <td>2,152</td>
            <td align ="center"><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.com/floorplans/807.pdf"><p></p>    
            <img className={classes.photo} alt='floorplan' src={floorplan}/></a></td>
            <td>Raw space, 2 kitchenettes, 2 offices, enclosed reception area, interior office, kitchen</td>
        </tr>


        <tr><td>904</td>
            <td>1,703</td>
            <td align ="center"><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.com/floorplans/904.png"><p></p>
            <img className={classes.photo} alt='floorplan' src={floorplan}/></a></td>
            <td>Built out doctors office with waiting room, reception, bathroom, 3 exam rooms, kitchen, 1 private office</td>
         </tr>

         <tr>
         <td>1015</td>
            <td>896</td>
            <td align ="center"><a target="_blank" rel="noopener noreferrer" href="http://tenterraces.com/floorplans/1015.pdf"><p></p>
            <img className={classes.photo} alt='floorplan' src={floorplan}/>
            </a></td>
            <td> Large Open Area, One Private Office, IT Room, Modern Blue Carpet</td>
        </tr>
   </tbody>
   </table>
  
    </div>
   )
}

export default leasingTable;
