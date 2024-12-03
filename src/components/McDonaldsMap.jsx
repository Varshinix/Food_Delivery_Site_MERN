// McDonaldsMap.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import './McDonaldsMap.css'; // Import the CSS file

// McDonald's location in Mumbai (Latitude and Longitude)
const mumbaiMcDonalds = { lat: 19.0760, lng: 72.8777 };

const McDonaldsMap = () => {
  return (
    <div className="map-container"> {/* Use the CSS class here */}
      <MapContainer
        center={mumbaiMcDonalds} // Center the map on the McDonald's location
        zoom={13} // Set the zoom level
        scrollWheelZoom={false} // Disable scroll zoom (optional)
        style={{
          width: '100%',  // Full width
          height: '100%', // Full height to avoid scrollbars
          display: 'block', // Prevent overflow
        }}
      >
        {/* TileLayer is like the map background */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Marker for McDonald's location */}
        <Marker position={mumbaiMcDonalds} icon={new L.Icon({ iconUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/McDonalds_Logo_2018.png', iconSize: [32, 32] })}>
          <Popup>
            <strong>McDonald's Mumbai</strong><br />
            Visit us for your favorite meals!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default McDonaldsMap;
