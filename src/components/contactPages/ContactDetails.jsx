import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteContactAction } from "../redux/actions/actions";

const ContactDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const contact = useSelector((store) =>
    store.contacts.find((con) => con.id === Number(id))
  );
  const handleDelete = (id) => {
    try {
      navigate(-1);
      deleteContactAction(id, dispatch);
    } catch (error) {
      console.log(error);
    }
  };
  if (!contact)
    return (
      <div
        style={{
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "10px",
          padding: "10px 10px",
          background: "white",
          width: "40%",
          textAlign: "center",
          margin: "20px auto",
        }}
      >
        <h1>Contact Not Found</h1>
        <br />
        <button
          style={{
            textAlign: "center",
            border: "1px solid blue",
            marginTop: "20px",
            padding: "5px 10px",
            backgroundColor: "rgb(169, 169, 169)",
            color: "black",
            fontWeight: "bold",
            borderRadius: "5px",
          }}
          onClick={() => navigate("/")}
        >
          Go To Home
        </button>
      </div>
    );
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        borderRadius: "10px",
        padding: "10px 10px",
        background: "white",
        width: "40%",
        textAlign: "center",
        margin: "20px auto",
      }}
    >
      <h1>First Name : {contact && contact.firstName}</h1>
      <h1>Last Name : {contact && contact.lastName}</h1>
      <h1>Status : {contact && contact.status}</h1>
      <br />
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
      &nbsp;
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
      <br />
      <br />
      <button
        style={{
          textAlign: "center",
          border: "1px solid blue",
          marginTop: "20px",
          padding: "5px 10px",
          backgroundColor: "rgb(169, 169, 169)",
          color: "black",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </div>
  );
};

export default ContactDetail;
