let containergame = document.getElementById("gamecontainer");
let btnstartgame = document.getElementById("start-game");
let containerheader = document.getElementById("headercontainer");
let appcontainer = document.getElementById("app-container");

btnstartgame.addEventListener('click', (e) => {
    appcontainer.classList.add("_onvh100");
    containergame.classList.add("_oncenter");
    containerheader.classList.add("_hidetop");

});