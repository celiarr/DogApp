import { GoogleApiWrapper, Map } from 'google-maps-react';
import React from 'react';

const GoogleMap = (props) => {


    const style = {
        height: '100%',
        width: '100%'
    };

    const coords = { lat: 10.3019, lng: -85.8411 };

  

    return (
        <div>
            <Map
                google={props.google}
                onClick={onMapClick}
                zoom={15}
                style={style}
                initialCenter={coords}
            >
            </Map>
        </div>
    )
}

export default GoogleApiWrapper({apiKey: 'AIzaSyDn1TmJyDjh0h_FuajJJVkaxwU2cRxDLtA'})(GoogleMap);