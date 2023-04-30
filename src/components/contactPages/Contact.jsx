import React from "react";
import { Link } from "react-router-dom";
import ShowContacts from "../showContact/ShowContact";

const Contact = () => {
  const style = {
    position: "fixed",
    backgroundColor: "rgb(57, 106, 147)",
    width: "80%",
    textAlign: "center",
    zIndex: "50",
    margin: "0px",
    top: "5px",
  };
  return (
    <div
      style={{
        textAlign: "center",
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        // background: "black",
        marginBottom: "20px",
        marginTop: "60px",
      }}
    >
      <h1 style={style}>Contact Page</h1>
      <Link
        style={{
          textAlign: "center",
          textDecoration: "none",
          border: "1px solid blue",
          marginTop: "20px",
          padding: "5px 10px",
          backgroundColor: "rgb(169, 169, 169)",
          color: "black",
          fontWeight: "bold",
          borderRadius: "5px",
        }}
        to="/create"
      >
        Create Contact
      </Link>
      <ShowContacts />
    </div>
  );
};

export default Contact;
