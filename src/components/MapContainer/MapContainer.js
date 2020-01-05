import React, {useState} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';


const mapStyles = {
  width: '90%',
  height: '50%',


};

export const MapContainer =props=> {
    const [showingInfoWindow, setInfoWindow] = useState(false);
    const [activeMarker, setActiveMarker] = useState({});
    const [selectedPlace, setSelectedPlace] = useState({});


    const onMarkerClick = (props, marker, e) =>{
        setSelectedPlace(props);
        setActiveMarker(marker);
        setInfoWindow(true);
    }
 
   const  onClose = props => {
        if (showingInfoWindow) {
            setInfoWindow(false);
            setActiveMarker(null);
        }
      };

    return (
      <Map
        google={props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{
         lat: 34.04682464366649,
         lng: -118.242
        }}
      >
    <Marker
          onClick={onMarkerClick}
          name={'Ten Terraces'}
        />
        <InfoWindow
          marker={activeMarker}
          visible={showingInfoWindow}
          onClose={onClose}
        >
          <div>
            <h4>{selectedPlace.name}</h4>
          </div>
        </InfoWindow>

      </Map>
    );
}

export default GoogleApiWrapper({apiKey: 'AIzaSyAzFzt5bkWGrzoMq9X_OizVm2PjWoPRiBk'})(MapContainer);