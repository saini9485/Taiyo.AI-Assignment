import React, { useState, useEffect } from "react";
import OneLineGraph from "./OneLineGraph";
import { getLineGraphCases } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

const LineGraph = () => {
  const [graphDataOfCases, setGraphDataOfCases] = useState(null);
  const dispatch = useDispatch();
  const lineGraph = useSelector((store) => store.graphs.lineGraph);
  const getGraphDataOfCases = () => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log("getGraphDataOfCases", data);
        getLineGraphCases(data, dispatch);
        setGraphDataOfCases(data);
      });
  };
  useEffect(() => {
    if (Object.keys(lineGraph).length === 0) {
      getGraphDataOfCases();
    } else {
      setGraphDataOfCases(lineGraph);
    }
  }, []);
  if (graphDataOfCases === null)
    return (
      <h1 style={{ textAlign: "center", margin: "100px auto" }}>
        Charts are Loading...
      </h1>
    );
  return (
    <div>
      {Object.keys(graphDataOfCases).map((key, index) => {
        return (
          <OneLineGraph
            key={index}
            name={key}
            datasetsData={graphDataOfCases[key]}
          />
        );
      })}
    </div>
  );
};

export default LineGraph;
