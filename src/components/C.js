import React, { useContext } from "react";
import Appcontext from "../contexts/AppContext";

const C = () => {
  const value = useContext(Appcontext);

  return (
    <div>
      <h3>C</h3>
      {value}
    </div>
  );
};

export default C;
