import React from "react";

const CardComponent = ({ title, children }) => {
  return (
    <div className="card card-ide rounded-3 text-dark mb-4 col-md-10 col-12 mx-auto">
      <div className="card-header border-0 rounded">{title}</div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default CardComponent;
