import React, { useState, useEffect } from "react";
import { getWorldCases, getCountryCases } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { Marker, Popup } from "react-leaflet";
import { MapContainer } from "react-leaflet/MapContainer";
import { TileLayer } from "react-leaflet/TileLayer";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconUrl from "leaflet/dist/images/marker-icon.png";
import shadowUrl from "leaflet/dist/images/marker-shadow.png";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconUrl: iconUrl,
  shadowUrl: shadowUrl,
});

const MapData = () => {
  const position = [51.505, -0.09];
  const [worldData, setWorldData] = useState(null);
  const [countrySpecificData, SetCountrySpecificData] = useState(null);

  const dispatch = useDispatch();
  const worldCases = useSelector((store) => store.graphs.worldCases);
  const countryCases = useSelector((store) => store.graphs.countryCases);
  const getWorldData = () => {
    fetch("https://disease.sh/v3/covid-19/all")
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("getWorldData", data);
        getWorldCases(data, dispatch);
        setWorldData(data);
      });
  };
  const getCountrySpecificData = () => {
    fetch("https://disease.sh/v3/covid-19/countries")
      .then((res) => {
        // console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log("getCountrySpecificData", data);
        getCountryCases(data, dispatch);
        SetCountrySpecificData(data);
      });
  };
  useEffect(() => {
    if (Object.keys(worldCases).length === 0) {
      getWorldData();
    } else {
      setWorldData(worldCases);
    }
    if (Object.keys(countryCases).length === 0) {
      setTimeout(() => {
        getCountrySpecificData();
      }, 500);
    } else {
      SetCountrySpecificData(countryCases);
    }
    // eslint-disable-next-line
  }, []);

  if (countrySpecificData === null)
    return (
      <h1 style={{ textAlign: "center", margin: "100px auto" }}>
        Map is Loading...
      </h1>
    );

  return (
    <MapContainer
      style={{
        height: "80vh",
        width: "75vw",
        margin: "auto",
        marginBottom: "10px",
      }}
      center={position}
      zoom={4}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {countrySpecificData.map((item, index) => {
        return (
          <Marker
            key={index}
            position={[item.countryInfo.lat, item.countryInfo.long]}
            eventHandlers={{
              mouseover: (event) => event.target.openPopup(),
            }}
          >
            <Popup>
              Country: {item.country},<br />
              <span style={{ color: "red" }}>Active Case: {item.active}</span>
              <br />
              <span style={{ color: "green" }}>
                Recovered: {item.recovered},
              </span>
              <br />
              <span style={{ color: "yellow" }}>Deaths: {item.deaths}</span>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default MapData;
