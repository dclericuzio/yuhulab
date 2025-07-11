// components/MapNoSSR.tsx
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import { LatLngTuple } from 'leaflet'

// Fix marker icon issue
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/assets/marker-icon-2x.png',
  iconUrl: '/assets/marker-icon.png',
  shadowUrl: '/assets/marker-shadow.png',
})

const position: LatLngTuple = [-6.220379, 106.818573]

export default function MapNoSSR() {
  return (
    <MapContainer
      center={position}
      zoom={16}
      scrollWheelZoom={true}
      style={{ height: '2.5rem', width: '100%', zIndex: '1' }}
      attributionControl={false}
    >
      <TileLayer
        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      />
      <Marker position={position}>
        <Popup className="custom-popup">
          Sampoerna Strategic Square, Jakarta
        </Popup>
      </Marker>
    </MapContainer>
  )
}
