import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import axios from "axios";
import PlayingCard from "./PlayingCard";
import useAxios from "./hooks/useAxios";
import "./PlayingCardList.css";

const BASE_URL = "https://deckofcardsapi.com/api/deck/new/draw/";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, addCard] = useAxios(BASE_URL);

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
