import React from "react";

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className="btn btn-danger w-100">
      {children}
    </button>
  );
};

export default MyButton;
