// Word Search.

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let chosenWords = ["Lightsaber", "Skywalker", "Coruscant"];

let text = document.getElementById("text");

let boardSize = 801 - chosenWords[0].length - chosenWords[1].length - chosenWords[2].length;

for (let i = 1; i < boardSize; i++) {

    let randomWords = characters[Math.floor(Math.random() * characters.length)];
    text.innerHTML += randomWords + " ";

     if (i % 50 === 0) {

        text.innerHTML += "<br />";
      
     }

}