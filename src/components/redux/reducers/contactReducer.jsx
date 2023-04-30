import { ADD_CONTACT, EDIT_CONTACT, DELETE_CONTACT } from "../actions/actions";

let initialStore = [];

const contactReducer = (state = initialStore, action) => {
  if (action.type === ADD_CONTACT) {
    state.push({
      id: action.payload.id,
      firstName: action.payload.firstName,
      lastName: action.payload.lastName,
      status: action.payload.status,
    });
    return state;
  }
  if (action.type === EDIT_CONTACT) {
    const findUser = state.find((con) => con.id === Number(action.payload.id));
    if (findUser) {
      findUser.firstName = action.payload.firstName;
      findUser.lastName = action.payload.lastName;
      findUser.status = action.payload.status;
    }
    return state;
  }
  if (action.type === DELETE_CONTACT) {
    const findUser = state.find((con) => con.id === Number(action.payload.id));
    if (findUser) {
      return state.filter((con) => con.id !== findUser.id);
    }
  }
  return state;
};

export default contactReducer;
