import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";

const useAxios = (url) => {
  const [cards, setCards] = useState([]);

  const addCard = async (name) => {
    // click event is sending synthetic event object if no argument is passed, is there another way to handle this?
    typeof name !== "string" ? (name = "") : (name = name);
    const response = await axios.get(`${url}${name}`);

    setCards((cards) => [...cards, { ...response.data, id: uuid() }]);
  };

  return [cards, addCard];
};

export default useAxios;
