// contact actions
export const ADD_CONTACT = "ADD_CONTACT";
export const EDIT_CONTACT = "EDIT_CONTACT";
export const DELETE_CONTACT = "DELETE_CONTACT";
// graphs actions
export const GET_LINE_GRAPH_CASES = "GET_LINE_GRAPH_CASES";
export const GET_WORLD_CASES = "GET_WORLD_CASES";
export const GET_COUNTRY_CASES = "GET_COUNTRY_CASES";

export const addContactAction = (state, dispatch) => {
  dispatch({
    type: ADD_CONTACT,
    payload: state,
  });
};
export const editContactAction = (state, dispatch) => {
  dispatch({
    type: EDIT_CONTACT,
    payload: state,
  });
};
export const deleteContactAction = (state, dispatch) => {
  dispatch({
    type: DELETE_CONTACT,
    payload: {
      id: state,
    },
  });
};

export const getLineGraphCases = (state, dispatch) => {
  dispatch({
    type: GET_LINE_GRAPH_CASES,
    payload: state,
  });
};
export const getWorldCases = (state,dispatch)=>{
  dispatch({
    type:GET_WORLD_CASES,
    payload:state,
  })
}
export const getCountryCases = (state,dispatch)=>{
  dispatch({
    type:GET_COUNTRY_CASES,
    payload:state,
  })
}
