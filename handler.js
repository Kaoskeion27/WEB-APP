const Handler = Object.create(null);

Handler.getQuestions = function (request_object) {
    console.log(request_object);
    return Promise.resolve({
        "questions": questions
    });
};

const questions = [
    {
        question: "Who won the oscar in 2014?",
        answers: [
            {text: "Wolf on Wallstreet", correct: false},
            {text: "Her", correct: false},
            {text: "Gravity", correct: false},
            {text: "12 Years a Slave", correct: true}
        ]
    },
    {
        question: "Which is NOT a Christopher Nolan Movie?",
        answers: [
            {text: "The Prestige", correct: false},
            {text: "Fight Club", correct: true},
            {text: "Memento", correct: false},
            {text: "Interstellar", correct: false}
        ]
    },
    {
        question: "Who is portrays Boromir in the Lord of the Rings?",
        answers: [
            {text: "Jean Reno", correct: false},
            {text: "Sean Bean", correct: true},
            {text: "Viggo Mortensen", correct: false},
            {text: "Piers Brosnan", correct: false}
        ]
    },
    {
        question: "Who was the director for 1917?",
        answers: [
            {text: "Roger Deakins", correct: false},
            {text: "Christopher Nolan", correct: false},
            {text: "Sam Mendes", correct: true},
            {text: "Alejandro Innaritu", correct: false}
        ]
    },
    {
        question: "Who starred in the movie 'Prisoners'?",
        answers: [
            {text: "Leonardo Di Caprio", correct: false},
            {text: "Joaquin Pheonix", correct: false},
            {text: "Cilian Murphy", correct: false},
            {text: "Hugh Jackman", correct: true}
        ]
    },
    {
        question: "How many oscars has Leonardo Di Caprio won??",
        answers: [
            {text: "1", correct: true},
            {text: "0", correct: false},
            {text: "2", correct: false},
            {text: "3", correct: false}
        ]
    },
    {
        question: "Who starred in the early 2000s teen comedy classic superBad?",
        answers: [
            {text: "Jonah Hill", correct: true},
            {text: "Channing Tatum", correct: false},
            {text: "Mclovin", correct: false},
            {text: "Donald Glover", correct: false}
        ]
    },
    {
        question: "Which movie did Martin Scorsese NOT direct?",
        answers: [
            {text: "Wolf of Wallstreet", correct: false},
            {text: "Goodfellas", correct: false},
            {text: "Uncut Gems", correct: true},
            {text: "Silence", correct: false}
        ]
    },
    {
        question: "In how many parsecs does the Millenium Falcon make the kessel run?",
        answers: [
            {text: "13 parsecs", correct: false},
            {text: "12 parsecs", correct: false},
            {text: "less than 12 parsecs", correct: true},
            {text: "14 parsecs", correct: false}
        ]
    },
    {
        question: "What type of clothing had the color red, in Schindler's List?",
        answers: [
            {text: "coat", correct: true},
            {text: "dress", correct: false},
            {text: "hat", correct: false},
            {text: "socks", correct: false}
        ]
    }
];

export default Object.freeze(Handler);