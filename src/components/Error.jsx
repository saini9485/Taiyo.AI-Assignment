import React from "react";
import { useNavigate } from "react-router-dom";
import pageNotFound from "../Assetes/pageNotFound.jpg";
const Error = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      style={{
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        width: "fit-content",
        margin: "20px auto",
        cursor: "pointer",
      }}
      onClick={handleClick}
    >
      <img
        style={{ display: "block", margin: "auto" }}
        src={pageNotFound}
        alt="page-not-found"
      />
    </div>
  );
};

export default Error;
