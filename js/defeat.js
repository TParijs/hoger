let btn = document.createElement("button")

btn.innerHTML = "Back";

btn.onclick = function () {

 const result = confirm('Terug naar het spel?');
 if (result) { location.replace(`./game.html`)
}
}

document.body.appendChild(btn);