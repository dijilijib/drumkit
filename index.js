
var nButtons = document.querySelectorAll(".drum").length;
for (let i = 0; i<nButtons; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML
        playSound(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    playSound(event.key);
})

function playSound(type) {
    switch(type) {
        case "a":
            var kick = new Audio('sounds/kick.wav');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.wav');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "e":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "f":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "g":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "h":
            var hat = new Audio('sounds/hat.wav');
            hat.play();
            break;
    }
}
