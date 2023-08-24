"use client";
import React from "react";

const SlideButtons = ({ cardsNum, path, currBox, setcurrBox }) => {
  const showBox = (id, path, currBox, setcurrBox) => {
    const currCardsBoxButton = document.getElementById(
      `${path}Button_${currBox}`
    );
    const cardsBoxButton = document.getElementById(`${path}Button_${id}`);
    const Slider = document.getElementById(`${path}Cards`);
    Slider.style.translate = `-${33.33 * id}%`;
    currCardsBoxButton.style.backgroundColor = "#BDBDBD";
    cardsBoxButton.style.backgroundColor = "#7C7C7C";
    return setcurrBox(id);
  };

  return (
    <button
      id={`${path}Button_${cardsNum}`}
      className="w-6 h-2 mx-2 rounded-md bg-custom-gray-shade4"
      onClick={() => {
        showBox(cardsNum, path, currBox, setcurrBox);
      }}
    ></button>
  );
};

export default SlideButtons;
