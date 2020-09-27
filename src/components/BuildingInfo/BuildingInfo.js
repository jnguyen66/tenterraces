import React from 'react';
import classes from './BuildingInfo.css';

const buildingInfo = props =>{
    return(

<div className={classes.Background}>

<div className={classes.BuildingInfo}>
<h1 >Building Info</h1>
<p ><strong>ABOUT 420 E. 3rd St. | REDESIGNED SOPHISTICATION</strong></p>

<p><span ><u><strong>Space Available</strong></u></span></p>
<ul><li>
	<p >Office Space: $2.95-$3.25 / SF Full Service Gross</p>
	</li>
	<li>
	<p >Brand new urban and traditional suites available</p>
	</li>
	<li>
	<p >Flexible, efficient floor plans</p>
	</li>
	<li>
	<p >A beautiful combination of exposed ceilings juxtaposed against glass, private terraces, and downtown views</p>
	</li>
</ul><p ><u><strong>Building Features</strong></u></p>

<ul><li>
	<p >Sophisticated glass exterior and contemporary finishes in the main lobby and common areas</p>
	</li>
	<li>
	<p >First class, highly capitalized ownership and on-site property management</p>
	</li>
	<li>
	<p >3 to 1 parking ratio with 24-hour security and gated access</p>
	</li>
	<li>
	<p >Adjacent to retail, restaurants, residential lofts, financial institutions and immediate access to public transit: Dash, Metro, (research)</p>
	</li>
	<li>
	<p >Located in LA’s cultural hub: Little To the Arts District fine dining and entertainment venues including Angel City Brewery, Doubltetree Hotel, Japanese Garden at JACCC, Miyako Hotel, Wolf &amp; Crane, The Geffen Contemporary, Daikokuya, and more.</p>
	</li>
    </ul>
    </div>
</div>

    )
}

export default buildingInfo;
