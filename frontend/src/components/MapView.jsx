import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import { getDataPoints } from "../services/api";
import L from "leaflet";

const redIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/red-dot.png",
  iconSize: [25, 25],
});

const greenIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/green-dot.png",
  iconSize: [25, 25],
});

const blueIcon = new L.Icon({
  iconUrl: "https://maps.google.com/mapfiles/ms/icons/blue-dot.png",
  iconSize: [25, 25],
});

const getIcon = (type) => {
  if (type === "IMINT") return redIcon;
  if (type === "HUMINT") return greenIcon;
  return blueIcon;
};

function MapView() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getDataPoints().then((res) => setData(res.data));
  }, []);

  return (
    <MapContainer center={[28.6, 77.2]} zoom={5} style={{ height: "100vh" }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.map((item, i) => (
        <Marker
          key={i}
          position={[item.latitude, item.longitude]}
          icon={getIcon(item.type)}
          eventHandlers={{
            mouseover: (e) => {
              e.target.openPopup();
            },
            mouseout: (e) => {
              e.target.closePopup();
            },
          }}
        >
          <Popup>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <img
              src={item.imageUrl}
              width="200"
              onError={(e) => {
                e.target.src = "https://picsum.photos/200";
              }}
              style={{ borderRadius: "8px" }}
            />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}

export default MapView;
