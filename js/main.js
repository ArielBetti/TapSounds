let containergame = document.getElementById("gamecontainer");
let btnstartgame = document.getElementById("start-game");
let containerheader = document.getElementById("headercontainer");
let appcontainer = document.getElementById("app-container");


btnstartgame.addEventListener('click', (e) => {
    appcontainer.classList.add("_onvh100");
    containergame.classList.add("_oncenter");
    containerheader.classList.add("_hidetop");
});

loop1.addEventListener('click', (e) => { playloop1.play(); });
loop2.addEventListener('click', (e) => { playloop2.play(); });
loop3.addEventListener('click', (e) => { playloop3.play(); });
tap1.addEventListener('click', (e) => { playtap1.play(); });
tap2.addEventListener('click', (e) => { playtap2.play(); });
tap3.addEventListener('click', (e) => { playtap3.play(); });
long1.addEventListener('click', (e) => { playlong1.play(); });
long2.addEventListener('click', (e) => { playlong2.play(); });
long3.addEventListener('click', (e) => { playlong3.play(); });