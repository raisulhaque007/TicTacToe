//JS code goes here
var turn = false;
function play(event){
console.log(event);
event.target.innerHTML=turn?"0":"x";
turn=!turn;
}

//var cell0=window.document.getElementByID("0");
//cell0.addeventListener('click, play');
