import React from "react";
import Form from "../form/Form";
import { useParams } from "react-router-dom";

const CreateContact = () => {
  const { id } = useParams();
  return (
    <div style={{ margin: "50px auto", textAlign: "center" }}>
      <h1>Edit Contact Screen</h1>
      <Form id={id} />
    </div>
  );
};

export default CreateContact;
