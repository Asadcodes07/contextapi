import React from "react";
import Child1 from "./Child1";
const Parent = ({ name }) => {
  return (
    <div>
       This is the Parent component
      <Child1 name={name} />
    </div>
  );
};

export default Parent;