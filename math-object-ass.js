function getRandomNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function computeBased() {
    let firstNumber = getRandomNumber(1, 100);
    let secondNumber = getRandomNumber(1, 100);
    let minValue = Math.min(firstNumber, secondNumber);
    let result = minValue * (firstNumber + secondNumber);

    document.getElementById('result').innerHTML = `The first generated number is ${firstNumber} and the second generated number is ${secondNumber}. The minimum number between the two is ${minValue}. The computation based on the assignment is ${result}`;
}  