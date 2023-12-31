import React, { useState } from "react";

const useFlipCard = (initialState = true) => {
  const [state, setState] = useState(initialState);
  const toggleState = () => {
    setState((state) => !state);
  };
  return [state, toggleState];
};

export default useFlipCard;
