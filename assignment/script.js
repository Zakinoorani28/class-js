const userInput = document.getElementById('input');

function number_cardinality() {
    if (!isNaN(userInput.value)) {
        alert(checkCardinality(parseInt(userInput.value)));
    } else {
        alert("Invalid input. Please enter a valid integer!!😠😠");
    }
}

function checkCardinality(number) {
    if (number % 10 === 0) {
        userInput.value = '';
        return "zero";
    } else if (number % 10 === 5) {
        userInput.value = '';
        return "five";
    } else if (number % 2 === 0) {
        userInput.value = '';
        return "even";
    } else if (number % 2 !== 0) {
        userInput.value = '';
        return "odd";
    }
}
