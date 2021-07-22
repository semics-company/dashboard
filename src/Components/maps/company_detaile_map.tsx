import React from 'react';
import { MapContainer, TileLayer, FeatureGroup,Circle,Rectangle, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';


const Companty_detaile_map = () => {
    const purpleOptions = { color: 'purple' }

    return (
        <div id="mapid">
            <MapContainer style={{width:"100%",height:"500px"}} center={[25.304951, 51.491814]} zoom={11} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                <FeatureGroup pathOptions={purpleOptions}>
                    <Popup>this is airport visit:200</Popup>
                    <Circle center={[25.272822, 51.609385]} radius={3500} />
                </FeatureGroup>

                <FeatureGroup pathOptions={purpleOptions}>
                    <Popup>Souq Waqif visit:200</Popup>
                    <Circle center={[25.288894, 51.535808]} radius={1000} />
                </FeatureGroup>

            </MapContainer>

        </div>

    );
};

export default Companty_detaile_map;