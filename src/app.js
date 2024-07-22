/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};

document.addEventListener("DOMContentLoaded", function() {
  const suits = ["Corazones", "Picas", "Tréboles", "Diamantes"];
  const values = [
    "As",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "Jota",
    "Reina",
    "Rey"
  ];

  function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function generateRandomCard() {
    const suit = getRandomElement(suits);
    const value = getRandomElement(values);
    return `${value} de ${suit}`;
  }

  const cardElement = document.getElementById("card");
  cardElement.textContent = generateRandomCard();
});
