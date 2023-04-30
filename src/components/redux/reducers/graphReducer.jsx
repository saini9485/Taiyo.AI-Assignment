import {
    GET_LINE_GRAPH_CASES,
    GET_WORLD_CASES,
    GET_COUNTRY_CASES,
  } from "../actions/actions";
  
  let initialStore = {
    lineGraph: {},
    worldCases: {},
    countryCases: {},
  };
  
  const graphReducer = (state = initialStore, action) => {
    switch (action.type) {
      case GET_LINE_GRAPH_CASES:
        state = {
          ...state,
          lineGraph: action.payload,
        };
        break;
      case GET_WORLD_CASES:
        state = {
          ...state,
          worldCases: action.payload,
        };
        break;
      case GET_COUNTRY_CASES:
        state = {
          ...state,
          countryCases: action.payload,
        };
    }
    return state;
  };
  export default graphReducer;
  