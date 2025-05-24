import { MapContainer, Marker, TileLayer } from "react-leaflet";

export function Map() {
    return (
        <MapContainer center={[-29.7874701, -55.7909598]} zoom={15} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[-29.7874701, -55.7909598]} />
            
        </MapContainer>
    )
}