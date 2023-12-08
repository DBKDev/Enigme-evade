import React from "react";
import { MapContainer, TileLayer,Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from "leaflet";



const MapContact = () => {

  //création d'un icone custom avec Icon leaflet
  const customIcon = new Icon({
    iconUrl: process.env.PUBLIC_URL + "/Images/Pin_map.png",
    iconSize: [35, 35]
  })

return<>

<MapContainer center={[50.63680306680231, 3.0677189067119546]} zoom={16} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
   <Marker position={[50.63680306680231, 3.0677189067119546]} icon={customIcon}>
    m
    <Popup>
      <span>
        <h3>
          Nous sommes ici !
        </h3>
      </span>
    </Popup>
  </Marker> 
</MapContainer>
 
  </>


}

export default MapContact;