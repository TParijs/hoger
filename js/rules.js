let btn = document.createElement("button")

btn.innerHTML = "Back";

btn.onclick = function () {

 const result = confirm('Terug naar het begin?');
 if (result) { location.replace(`./index.html`)
}
}

document.body.appendChild(btn);