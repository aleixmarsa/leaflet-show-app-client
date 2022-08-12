import {
  MapContainer,
  TileLayer,
  useMapm,
  Marker,
  Popup,
  L,
} from "react-leaflet";

const position = [51.505, -0.09];

const Map = () => {
  return (
    <div className="w-96 h-96">
    <MapContainer center={position} zoom={13}>
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
        subdomains="abcd"
        maxZoom="20"
      ></TileLayer>
      {/* <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker> */}
    </MapContainer>
    </div>

  );
};

export default Map;
