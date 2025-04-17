let currentQuestion = 0;
const questions = [
    {
        question: "You wake up on a sunny morning. There's an envelope on your nightstand. What do you do?",
        answers: {
            A: "Open it with excitement.",
            B: "Open it with caution.",
            C: "Ignore it for now."
        }
    },
    {
        question: "The letter inside is mysterious. It leads you to The Parenting Grove. What do you do?",
        answers: {
            A: "I’ll pack snacks and go!",
            B: "Could be a prank, but I’ll go anyway.",
            C: "Not sure... but I’m curious."
        }
    },
    {
        question: "A child drops their backpack and starts crying. How do you react?",
        answers: {
            A: "Kneel down and comfort them.",
            B: "Let them approach me first.",
            C: "Pick up the bag and offer a smile."
        }
    },
    {
        question: "The cart tips over and chaos ensues. How do you handle it?",
        answers: {
            A: "Calm everyone down with a step-by-step approach.",
            B: "Stay quiet and offer a clever solution.",
            C: "Tell everyone to relax and laugh about it later."
        }
    },
    {
        question: "A vine curls around your wrist and asks: What do you want your child to remember about you?",
        answers: {
            A: "I always showed up.",
            B: "I understood their feelings.",
            C: "I made life joyful and creative."
        }
    }
];

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;

    const buttons = document.querySelectorAll(".answer-btn");
    let i = 0;
    for (let answer in current.answers) {
        buttons[i].textContent = current.answers[answer];
        i++;
    }
}

function nextQuestion(answer) {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        displayQuestion();
    } else {
        showResult(answer);
    }
}

function showResult(answer) {
    const result = getResult(answer);
    const questionElement = document.getElementById("question");
    questionElement.textContent = `Your parenting style matches: ${result.name}`;
}

function getResult(answer) {
    // Match answers to specific results
    const results = {
        A: { name: "The Balanced Heart", scent: "Lavender & Orange" },
        B: { name: "The Cheerful Warrior", scent: "Lemongrass & Orange" },
        C: { name: "The Grounded Sage", scent: "Sandalwood & Orange" }
    };

    return results[answer] || results.A;  // Default result if no answer matched
}

displayQuestion();
