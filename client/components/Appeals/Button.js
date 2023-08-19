"use client";
import React from "react";

const Button = ({ cardsNum, currCards, setcurrCards }) => {
  const showBox = (id, currBox, setcurrBox) => {
    const currCardsBox = document.getElementById(`cardsBox_${currBox}`);
    const currCardsBoxButton = document.getElementById(
      `cardsButton_${currBox}`
    );
    const cardsBoxButton = document.getElementById(`cardsButton_${id}`);
    const cardsBox = document.getElementById(`cardsBox_${id}`);
    currCardsBoxButton.style.backgroundColor = "#BDBDBD";
    cardsBoxButton.style.backgroundColor = "#7C7C7C";
    currCardsBox.style.display = "none";
    cardsBox.style.display = "flex";
    return setcurrBox(id);
  };

  return (
    <button
      id={`cardsButton_${cardsNum}`}
      className="w-6 h-2 mx-2 rounded-md bg-custom-gray-shade4"
      onClick={() => {
        showBox(cardsNum, currCards, setcurrCards);
      }}
    ></button>
  );
};

export default Button;
