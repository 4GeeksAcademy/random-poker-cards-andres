/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  function generadorAleatorioPoker() {
    let cartaTipos = ["♥", "♦", "♠", "♣"];

    let cartaAleatorios =
      cartaTipos[Math.floor(Math.random() * cartaTipos.length)];

    document.getElementById("cartaTop").innerHTML = cartaAleatorios;
    document.getElementById("cartaBottom").innerHTML = cartaAleatorios;

    let carta = document.getElementById("carta");
    carta.classList.add(cartaAleatorios);

    let numeroCarta = [
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

    document.getElementById("numero").textContent =
      numeroCarta[Math.floor(Math.random() * numeroCarta.length)];
  }

  generadorAleatorioPoker();
};
