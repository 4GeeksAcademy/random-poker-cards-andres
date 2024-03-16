/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function aleatoryPokerGenerator() {
    let cardTypes = ["♥", "♦", "♠", "♣"];

    let cardAleatory =
      cardTypes[Math.floor(Math.random() * cardTypes.length)];

    document.getElementById("cardTop").innerHTML = cardAleatory;
    document.getElementById("cardBottom").innerHTML = cardAleatory;

    let card = document.getElementById("card");
    card.classList.add(cardAleatory);

    let cardNumber = [
      "A",
      "J",
      "K",
      "Q",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10"
    ];

    document.getElementById("number").textContent =
      cardNumber[Math.floor(Math.random() * cardNumber.length)];
  }

  aleatoryPokerGenerator();
};
