import React, { useState, useEffect } from "react";
import { getWorldCases } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const World = () => {
  const [worldData, setWorldData] = useState(null);

  const dispatch = useDispatch();
  const worldCases = useSelector((store) => store.graphs.worldCases);
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
  useEffect(() => {
    if (Object.keys(worldCases).length === 0) {
      getWorldData();
    } else {
      setWorldData(worldCases);
    }
    // eslint-disable-next-line
  }, []);
  if (worldData === null) {
    return (
      <h1 style={{ textAlign: "center", margin: "60px auto" }}>
        Please Wait! Word Data Loading...
      </h1>
    );
  }
  return (
    <div
      style={{
        margin: "60px auto",
        display: "flex",
        justifyContent: "space-around",
        textAlign: "center",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      }}
    >
      <h3>
        Total Cases
        <br />
        {worldData.cases}
      </h3>
      <h3>
        Total Active Cases
        <br />
        {worldData.active}
      </h3>
      <h3>
        Total Recovered Cases <br />
        {worldData.recovered}
      </h3>
      <h3>
        Total Deaths Cases
        <br />
        {worldData.deaths}
      </h3>
    </div>
  );
};

export default World;
