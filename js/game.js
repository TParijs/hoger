let btn = document.createElement("button")

btn.innerHTML = "Back";

btn.onclick = function () {

    const result = confirm('Terug naar het begin?');
    if (result) { location.replace(`./index.html`)
}
}

document.body.appendChild(btn);

let playerWin = 0
let computerWin = 0
let computerDice = 1
let playerDice = 1
const maxDice = 12
playerRound = [];
    const button = document.createElement("button");
button.innerText = "Play";
button.type = "submit";
button.name = "button";
button.classList.add("button");
    

button.addEventListener("click", () => {
    
    const userName = prompt('wat is uw username', 'Speler 1');
    console.log(userName);
      computerDice = throwDice(maxDice);
    
      function throwDice(maxNumber) {
        let randomNumber = Math.floor(Math.random() * maxNumber);
        randomNumber++;// Tel er 1 bij op (0 op een dobbelsteen is ongebruikelijk ;-) )
        return randomNumber;
    }



    let higherLower = prompt(`computer gooit ${computerDice} . gooi jij (H)oger of (L)ager ${userName}?`);
    higherLower = higherLower.toLowerCase();
    playerDice = throwDice(maxDice)
    alert(`Jij gooide ${playerDice}`);
        checkWinner(higherLower); 
    
    });
    
function checkWinner(higherLower) {
if (computerDice == playerDice) {
    playerRound.push("TIED");
    alert("ronde gelijk gespeeld");
    return;
}

if (higherLower == "l" && computerDice > playerDice) {
    playerRound.push("WON");
    playerWin++;
    alert("ronde gewonnen");
}

else if (higherLower == "h" && playerDice > computerDice ) {
    playerRound.push("WON");
    playerWin++;
    alert("ronde gewonnen");
}
else {
    playerRound.push("LOST");
     computerWin++;
    alert("ronde verloren");
}

if (playerWin >= 3) {
    alert(`VICTORY`);
    location.replace(`/won.html`)
} else if (computerWin >= 3){
    alert(`DEFEAT`)
    location.replace(`/defeat.html`)
}

console.log(playerRound);

}

document.body.appendChild(button);
   