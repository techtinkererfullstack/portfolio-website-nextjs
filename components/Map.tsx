"use client"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix for default marker icons in TypeScript/Next.js
const customIcon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
})

// Define the interface clearly for the dynamic import
export interface MapProps {
  center: [number, number]
  zoom?: number
}

export default function Map({ center, zoom = 14 }: MapProps) {
  return (
    <div className="h-full w-full overflow-hidden">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={false}
        // These classes handle the grayscale look and the dark mode inversion
        className="h-full w-full contrast-[1.1] grayscale transition-all dark:hue-rotate-180 dark:invert"
        zoomControl={false} // Cleaner UI for a contact form
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={center} icon={customIcon}>
          <Popup>
            <span className="font-sans font-semibold">Dhanmondi, Dhaka</span>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}
