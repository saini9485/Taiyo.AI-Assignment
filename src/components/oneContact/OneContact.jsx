import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { deleteContactAction } from "../redux/actions/actions";
import { useDispatch } from "react-redux";

import "../oneContact/OneContact.css"

const OneContact = ({ firstName, lastName, status, id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleDelete = (id) => {
    try {
      deleteContactAction(id, dispatch);
    } catch (error) {
      console.log(error);
    }
  };
  const handleDetails = (id) => {
    navigate(`/${id}`);
  };
  return (
    <div className="Wrapper">
      <div onClick={() => handleDetails(id)}>
        <h3>Name: {firstName + " " + lastName}</h3>
        <h4>Status : {status}</h4>
      </div>
      <Link
        style={{
          textAlign: "center",
          border: "1px solid blue",
          marginTop: "20px",
          padding: "3px 10px",
          textDecoration: "none",
          backgroundColor: "green",
          color: "black",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
        to={`/edit/${id}`}
      >
        Edit
      </Link>
      &nbsp;&nbsp;
      <button
        style={{
          textAlign: "center",
          border: "1px solid blue",
          marginTop: "20px",
          padding: "5px 10px",
          backgroundColor: "red",
          color: "black",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
        onClick={() => handleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
};

export default OneContact;
