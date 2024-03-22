var boxes = document.getElementById("boxes");
for (let index = 0; index < 9; index++) {
  boxes.innerHTML += `<div onclick={tick(this)} class='box'></div>`;
}

var isFirstUser = true;

function tick(box) {
  if (box.innerHTML == "") {
    if (isFirstUser === true) {
      box.innerHTML = `<img src="http://www.clipartbest.com/cliparts/ncE/R5b/ncER5bzpi.png"/>`;
      isFirstUser = false;
    } else {
      box.innerHTML = `<img src="https://icon-library.com/images/x-png-icon/x-png-icon-2.jpg"/>`;
      isFirstUser = true;
    }
  }
}
