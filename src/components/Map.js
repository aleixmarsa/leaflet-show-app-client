import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
import { Icon } from "leaflet";
import { useEffect } from "react";
import musicMarkerIcon from "../assets/music-marker.png";
import drinkMarkerIcon from "../assets/drink-marker.png"

const musicEvents = [
  {
    position: [41.39784488622993, 2.191078598731124],
    location: "Razmatazz",
    date: "12th August",
    artist: "Kendrick Lamar",
  },
  {
    position: [41.39600184852106, 2.1886431531212955],
    location: "WOLF",
    date: "15th August",
    artist: "Rosalia",
  },
];

const drinkEvents = [
  {
    position: [41.39858530584905, 2.1876775579557957],
    location: "Lorem Ipsum",
    date: "12th August",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    position: [41.394376068838014, 2.189694578968173],
    location: "Lorem Ipsum",
    date: "15th August",
    artist: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Map = (props) => {
  const currentPosition = [41.39770124637789, 2.1904024540457168];
  const {category} = props;
  console.log("🚀 ~ file: Map.js ~ line 40 ~ Map ~ category", category)

  
  return (
    <div className="border border-black w-fit mx-2 flex">
      <MapContainer center={currentPosition} zoom={15.5}>
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
          subdomains="abcd"
          maxZoom="20"
        ></TileLayer>
        <Marker position={currentPosition} />
        {
          category === 'music' ? (
            musicEvents.map((event) => {
          return (
            <Marker
              key={event.position}
              position={event.position}
              icon={
                new Icon({
                  iconUrl: musicMarkerIcon,
                  iconSize: [40, 40],
                  iconAnchor: [20, 30],
                })
              }
            >
              <Popup>
                <span className="font-bold">{event.location}</span>
                <br /> {event.date}
                <br /> {event.artist}
              </Popup>
            </Marker>
          );
        })
          ): (
            drinkEvents.map((event) => {
          return (
            <Marker
              key={event.position}
              position={event.position}
              icon={
                new Icon({
                  iconUrl: drinkMarkerIcon,
                  iconSize: [40, 40],
                  iconAnchor: [20, 30],
                })
              }
            >
              <Popup>
                <span className="font-bold">{event.location}</span>
                <br /> {event.date}
                <br /> {event.artist}
              </Popup>
            </Marker>
          );
        })
         
          )
        }
       
      </MapContainer>
    </div>
  );
};

export default Map;
