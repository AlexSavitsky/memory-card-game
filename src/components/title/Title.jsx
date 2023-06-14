import React from "react";
import "./style.scss";

const Title = ({ label }) => {
  return (
    <div className="title">
      <h1 className="neon-title">{label}</h1>
    </div>
  );
};

export default Title;
