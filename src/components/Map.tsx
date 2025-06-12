import { MapContainer, Marker, TileLayer, useMapEvents } from "react-leaflet";
import { latLng, type LeafletMouseEvent } from "leaflet"
import { useState } from "react";

export function Map() {
    function MyComponent() {
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0])

    const map = useMapEvents({
    click: (event: LeafletMouseEvent) => {
      setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng
        ])

        let lat = event.latlng.lat
        let lng = event.latlng.lng

        console.log(lat, lng)
    },
  })
  
  return null
}
 
    const [selectedPosition, setSelectedPosition] = useState<[number, number]>([0, 0])

    function handleMapClick(event: LeafletMouseEvent) {
        setSelectedPosition([
            event.latlng.lat,
            event.latlng.lng
        ])
        console.log("pasnpioan")
    }


    return (
        <MapContainer  center={[-29.7874701, -55.7909598]} zoom={15} scrollWheelZoom={true} className="w-full h-full">
            <MyComponent />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-29.7874701, -55.7909598]} eventHandlers={{}} />         
        </MapContainer>
    )
}