function generateRandom(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function computeHighest(){
    let myRandom1 = generateRandom(1, 100);
    let myRandom2 = generateRandom(1, 100);
    let min = Math.min(myRandom1, myRandom2);
    let result = min * (myRandom1 + myRandom2);

    document.querySelector('#result2').innerHTML = `The first generated number is ${myRandom1} and the second generated number is ${myRandom2}. The minimum number between the two is ${min}. The computation based on the assignment is ${result}`;
}