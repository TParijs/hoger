


alert(`Welkom bij het spel Hoger Lager`)
const agePrompt=prompt("Voer hier uw leeftijd in");
if (agePrompt>=18){
    alert(`Welcome`) //als je boven 18 of ouder bent
if (agePrompt>=18){
    alert(`Als u de regels nog niet kent druk dan op de knop links onder`)
}
} else if (agePrompt<18){
    alert(`U bent te jong`); //als je onder 18 bent
    window.location.reload()};
    
{let btn = document.createElement("button")

btn.innerHTML = "Rules";

btn.onclick = function () {

    const result = confirm('Wilt u de regels weten?');
    if (result) { location.replace(`./start.html`)
}
    

};

document.body.appendChild(btn);
}

let btn = document.createElement("button")

btn.innerHTML = "Start";

btn.onclick = function () {

    const result = confirm('Wilt u beginnen?');
    if (result) { location.replace(`./game.html`)
}
    

};

document.body.appendChild(btn);






     
    
    

