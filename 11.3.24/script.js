// class 1

// var num1= +prompt("Enter your first value");
// var num2= +prompt("Enter your second value");

// var sum = num1+num2;

// alert("Answer is " + sum);

// class 2

var div = document.getElementById("table");

function btnPress() {
  div.innerHTML = "";
  var input = document.getElementById("input");

  for (var i = 1; i < 11; i++) {
    div.innerHTML += `<h4>${input.value} X ${i} = ${input.value * i}</h4>`;
  }

  input.value = "";

  alert("TABLE GENERATED!!");
}
