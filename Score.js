const Counter = Object.create(null);

// function that increments 1 to the user's score
// if the correct answer is selected
Counter.newScore = function (scoreCounter, correct) {
    console.log(scoreCounter, correct);
    if (correct) {
        scoreCounter += 1;
        console.log(scoreCounter);
        return scoreCounter;
    }
    return scoreCounter;
};

export default Object.freeze(Counter);
