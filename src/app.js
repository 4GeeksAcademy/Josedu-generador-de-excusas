/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document.querySelector(".excusa").innerHTML = generarExcusa();
  document.querySelector(".button").addEventListener("click", () => {
    document.querySelector(".excusa").innerHTML = generarExcusa();
  });
};

function generarExcusa() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];

  let whoPart = Math.floor(Math.random() * who.length);
  let actionPart = Math.floor(Math.random() * action.length);
  let whatPart = Math.floor(Math.random() * what.length);
  let whenPart = Math.floor(Math.random() * when.length);
  return (
    who[whoPart] +
    " " +
    action[actionPart] +
    " " +
    what[whatPart] +
    " " +
    when[whenPart] +
    "."
  );
}
