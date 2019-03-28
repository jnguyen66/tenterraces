import React from 'react';
import classes from './LeasingTable.css'

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
            <td><a target="_blank" rel="noopener noreferrer" href="http://tenterraces.000webhostapp.com/floorplans/130.pdf"><p></p>
            <img alt='floorplan' src="http://tenterraces.000webhostapp.com/floorplans/floorplanicon.png"/></a>
            </td>
            <td>Retail space</td>
        </tr>

        <tr>
        <td>701</td>
            <td>1,091</td>
            <td><a target="_blank" rel="noopener noreferrer" href="http://tenterraces.000webhostapp.com/floorplans/701.pdf"><p></p>
            <img alt='floorplan' src="http://tenterraces.000webhostapp.com/floorplans/floorplanicon.png" />
            </a></td>
            <td>Open Floor Plan, Kitchenette, office, good window line</td>
        </tr>

        <tr><td>704</td>
            <td>3,022</td>
            <td><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.000webhostapp.com/floorplans/703.704.pdf"><p></p>
            <img alt='floorplan' src="http://tenterraces.000webhostapp.com/floorplans/floorplanicon.png"></img></a></td>
            <td>3 windowed offices, kitchenette, phone closet, open area interior office, large open raw space, great views with patio</td>  
        </tr>

        <tr><td>801</td>
            <td>3,434</td>
            <td><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.000webhostapp.com/floorplans/801.pdf"><p></p>
            <img alt='floorplan' src="http://tenterraces.000webhostapp.com/floorplans/floorplanicon.png"/></a></td>
            <td>2 windowed offices, 7 windowed exam rooms, 2 kitchens, X-ray lab, restroom, enclosed reception, receptionist work area</td>
        </tr>

        <tr><td>807</td>
            <td>2,152</td>
            <td><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.000webhostapp.com/floorplans/807.pdf"><p></p>    
            <img alt='floorplan' src="http://tenterraces.000webhostapp.com/floorplans/floorplanicon.png"/></a></td>
            <td>Dental space, 4 chairs, 2 kitchenettes, 3 offices, enclosed reception, receptionist area, interior office, kitchen</td>
        </tr>


        <tr><td>903A</td>
            <td>654</td>
            <td><a rel="noopener noreferrer" target="_blank" href="http://tenterraces.000webhostapp.com/floorplans/903A.pdf"><p></p>
            <img alt='floorplan' src="http://tenterraces.000webhostapp.com/floorplans/floorplanicon.png"/></a></td>
            <td>1 windowed office, exam room, 2 interior rooms w/ plumbing</td>
         </tr>
   </tbody>
   </table>
  
    </div>
   )
}

export default leasingTable;
