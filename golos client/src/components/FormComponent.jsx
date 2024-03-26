import React from "react";

const FormComponent = ({ onSubmit, children }) => {
  return (
    <form className="row g-3 p-3" onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default FormComponent;
