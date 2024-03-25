const userInput = document.getElementById('input');
function number_cardinality() {
    if (!isNaN(userInput.value)) {
        alert(checkCardinality(parseInt(userInput.value)));
    } else {
        alert("Invalid input. Please enter a valid integer!!");
    }
}

function checkCardinality(number) {
    if (number % 10 === 0) {
        return "zero";
        userInput.value = ''
    } else if (number % 10 === 5) {
        return "five";
    } else if (number % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}

// function number_cardinality(number) {
//   if (number % 10 === 0) {
//     return "zero";
//   } else if (number % 10 === 5) {
//     return "five";
//   } else if (number % 2 === 0) {
//     return "even";
//   } else {
//     return "odd";
//   }
// }

// const userInput = document.querySelector('input');

// if (!isNaN(userInput.value)) {
//   alert(number_cardinality(userInput.value));
// } else {
//   alert("Invalid input. Please enter a valid integer!! 😠😠");
// }
