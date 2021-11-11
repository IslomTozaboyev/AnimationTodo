import React, { useState } from "react";

const Inputs = () => {
  const [value, setValue] = useState("");
  return (
    <div>
      <p className="mb-0 py-2 px-2 text-danger">Value: {value}</p>
      <input
        placeholder="...typing"
        type="text"
        className="form-control py-2"
        value={value}
        onChange={(event) => setValue(event.target.value)}
      />
    </div>
  );
};

export default Inputs;
