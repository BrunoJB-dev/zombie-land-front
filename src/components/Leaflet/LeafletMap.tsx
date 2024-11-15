import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import "./Leaflet.scss"

const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

function LeafletMap()  {
  return (
    <div className='map-container'>
      <MapContainer
        style={{ width: '100%', height: '400px' }}
        center={[49.1261, -1.1664]}
        zoom={13}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[49.1261, -1.1664]} icon={icon} />
      </MapContainer>
    </div>
  );
};

export default LeafletMap;
