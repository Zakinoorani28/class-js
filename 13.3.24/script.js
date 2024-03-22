let box = document.getElementById("boxes");

let colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink", "brown", "gray"];

for (let i = 0; i < colors.length; i++) {
    box.innerHTML += `<div class="box2" style="background-color:${colors[i]}"></div>`;
    };