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
    let x, y, z, colorInString = '';
    pixelPerSquare = 960/gridLength;
for (i = 0; i <= gridLength; i ++){
    for (j = 0; j <= gridLength; j ++){
        newDiv = document.createElement('div');
        newDiv.id = "div" + counter;
        newDiv.style.border = "1px solid";
        newDiv.style.background = "white";
        newDiv.style.width = pixelPerSquare + "px";
        newDiv.style.height = pixelPerSquare + "px";
        x = Math.floor(Math.random() * 256);
        y = Math.floor(Math.random() * 256);
        z = Math.floor(Math.random() * 256);
        colorInString = "rgb(" + x + "," + y + "," + z + ")"
        newDiv.addEventListener('mouseover',function(event){
            event.target.style.background = colorInString;
        });
        if(counter % (gridLength + 1) != 0){
            newDiv.style.cssFloat= "left";
        }
        counter ++;
        container.appendChild(newDiv);
    }
}
}

