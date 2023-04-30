import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { addContactAction, editContactAction } from "../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";

import "../form/Form.css"

const Form = ({ id }) => {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    status: "",
  });
  const dispatch = useDispatch();
  const contacts = useSelector((store) => store.contacts);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      id
        ? editContactAction(
            {
              ...state,
              id,
            },
            dispatch
          )
        : addContactAction(
            {
              ...state,
              id:
                contacts.length > 0 ? contacts[contacts.length - 1].id + 1 : 1,
            },
            dispatch
          );
      setTimeout(() => {
        navigate("/");
      }, 100);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (id) {
      const contact = contacts.find((item) => {
        return item.id === Number(id) && item;
      });

      const { firstName, lastName, status } = contact;
      setState({
        firstName: firstName,
        lastName: lastName,
        status: status,
      });
    }
  }, [id]);
  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={state.firstName}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
        <br />
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={state.lastName}
          onChange={(e) =>
            setState({ ...state, [e.target.name]: e.target.value })
          }
        />
        <div>
          <label>Status:</label>
          <div>
            <input
              type="radio"
              name="status"
              checked={state.status === "Active"}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: "Active" })
              }
            />
            <label>Active</label>
            <br />
            <input
              type="radio"
              name="status"
              checked={state.status === "Inactive"}
              onChange={(e) =>
                setState({ ...state, [e.target.name]: "Inactive" })
              }
            />
            <label>Inactive</label>
          </div>
        </div>
        <button disabled={!state.firstName || !state.lastName || !state.status}>
          {id ? "Save Edited Contact " : "Save Contact"}
        </button>
      </form>
    </div>
  );
};

export default Form;
