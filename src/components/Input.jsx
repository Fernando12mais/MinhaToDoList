import React from "react";

import "./Input.css";

const Input = ({ takeInputValue }) => {
  const inputValue = (value) => {
    takeInputValue(value.target.value);
  };
  return (
    <>
      <input onChange={inputValue}></input>
    </>
  );
};

export default Input;
<></>;
