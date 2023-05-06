//event listener accepts two arguments in which first one accepts which event is going to be performed and second one
// accepts what that event is going to perform

var size = document.querySelectorAll(".drum").length;

//for mouse click
for(var i=0; i<size; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        var button = this.innerHTML;
        makeSound(button);
        animation(button);
    });
}

//detecting keyboard press
document.addEventListener("keypress", function(event){
    makeSound(event.key);
    animation(event.key);
});

function makeSound(key){

    switch(key){

        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        break;

        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        break;

        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        break;

        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        break;

        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        break;

        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        break;

        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        break;

        default: console.log(button);
    }
}

function animation(key){

    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}