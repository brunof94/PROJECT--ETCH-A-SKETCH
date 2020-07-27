const divContainer = document.querySelector('container');
let i,j, counter = 1, gridLength = 16, newDiv, pixelPerSquare;
const buttonToReset = document.createElement('button');
buttonToReset.textContent = "Reset";

buttonToReset.addEventListener('click', function startReset(){
container.innerHTML = "";
container.appendChild(buttonToReset);
container.appendChild(breakPoint);
gridLength = prompt("How many squares per side");
counter = 1;
generateGrid(gridLength);
});


container.appendChild(buttonToReset);
const breakPoint = document.createElement('br');
container.appendChild(breakPoint);


generateGrid(gridLength);

function generateGrid(gridLength) {
    pixelPerSquare = 960/gridLength;
for (i = 0; i <= gridLength; i ++){
    for (j = 0; j <= gridLength; j ++){
        newDiv = document.createElement('div');
        newDiv.id = "div" + counter;
        newDiv.style.border = "1px solid";
        newDiv.style.background = "white";
        newDiv.style.width = pixelPerSquare + "px";
        newDiv.style.height = pixelPerSquare + "px";
        newDiv.addEventListener('mouseover',function(event){
            event.target.style.background = randomColor();
        });
        if(counter % (gridLength + 1) != 0){
            newDiv.style.cssFloat= "left";
        }
        counter ++;
        container.appendChild(newDiv);
    }
}
}

function randomColor(){
    let x = Math.floor(Math.random() * 256);
    let y = Math.floor(Math.random() * 256);
    let z = Math.floor(Math.random() * 256);
    let colorInString = "rgb(" + x + "," + y + "," + z + ")"
    return colorInString;
}