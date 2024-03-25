function number_cardinality() {
    const userInput = document.getElementById('input').value;
    if (!isNaN(userInput)) {
        alert(checkCardinality(parseInt(userInput)));
    } else {
        alert("Invalid input. Please enter a valid integer!!");
    }
}

function checkCardinality(number) {
    if (number % 10 === 0) {
        return "zero";
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
