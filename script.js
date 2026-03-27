// Quiz Questions Data
const quizData = [
    {
        id: 1,
        question: "What's your ideal Friday night vibe?",
        options: [
            { text: "Calm and relaxed at home", value: 0 },
            { text: "Energetic and out with friends", value: 1 }
        ]
    },
    {
        id: 2,
        question: "How do you handle stress?",
        options: [
            { text: "Take it slow and reflect", value: 0 },
            { text: "Jump into action and solve it", value: 2 }
        ]
    },
    {
        id: 3,
        question: "Your social style is...",
        options: [
            { text: "Thoughtful and introspective", value: 0 },
            { text: "Outgoing and adventurous", value: 2 }
        ]
    },
    {
        id: 4,
        question: "What's your work style?",
        options: [
            { text: "Methodical and organized", value: 0 },
            { text: "Creative and spontaneous", value: 3 }
        ]
    },
    {
        id: 5,
        question: "How do you spend your ideal day?",
        options: [
            { text: "Peaceful, with good books and nature", value: 0 },
            { text: "Exciting, full of new experiences", value: 2 }
        ]
    }
];

// Personality Drinks Data (Score 0-10)
const personalityDrinks = {
    0: {
        name: "Cucumber Mint Cooler",
        emoji: "🥒",
        description: "Fresh, light, and incredibly refreshing - a hydrating blend of cucumber, lime, and mint with a hint of agave.",
        personality: "You're calm, introspective, and appreciate the simple pleasures in life. Your zen-like approach brings peace to any room."
    },
    1: {
        name: "Mojito",
        emoji: "🍃",
        description: "The classic balance of minty freshness with a subtle kick. Light, accessible, and timeless.",
        personality: "You're steady and reliable, with a touch of charm. You value tradition but aren't afraid of a little spontaneity."
    },
    2: {
        name: "Margarita",
        emoji: "🍋",
        description: "Zesty and sophisticated, with perfect balance of sweet, sour, and strong. A crowd favorite!",
        personality: "You're practical yet fun, balancing work and play seamlessly. People appreciate your friendly energy."
    },
    3: {
        name: "Strawberry Daiquiri",
        emoji: "🍓",
        description: "Sweet, fruity, and vibrant - a fun twist on a classic with fresh strawberries and rum.",
        personality: "You're naturally charming and bring color to every gathering. Your optimistic outlook is contagious!"
    },
    4: {
        name: "Pina Colada",
        emoji: "🥥",
        description: "Tropical, creamy, and indulgent - tastes like a vacation in a glass.",
        personality: "You're adventurous and love to escape the mundane. Your free spirit and warmth make you unforgettable."
    },
    5: {
        name: "Long Island Iced Tea",
        emoji: "🌊",
        description: "Bold, complex, and powerful - a mix of five spirits that packs a serious punch.",
        personality: "You're ambitious and bold, with a larger-than-life personality. You tackle challenges head-on with confidence."
    },
    6: {
        name: "Espresso Martini",
        emoji: "☕",
        description: "Sophisticated and energizing - coffee meets elegance with vodka, kahlúa, and a shake to perfection.",
        personality: "You're sharp, ambitious, and always buzzing with ideas. Your dynamic energy is unstoppable."
    },
    7: {
        name: "Cosmopolitan",
        emoji: "💎",
        description: "Chic, elegant, and refined - cranberry, vodka, and citrus create pure sophistication.",
        personality: "You're stylish and classy with impeccable taste. You know how to make an entrance and always look fabulous."
    },
    8: {
        name: "Whiskey Smash",
        emoji: "🥃",
        description: "Strong, smoky, and intense - rye whiskey mixed with fresh lemon and a splash of thyme.",
        personality: "You're bold and fearless, with a strong personality. You don't follow trends; you set them."
    },
    9: {
        name: "Flaming Dragon",
        emoji: "🐉",
        description: "Fiery and explosive - a daring mix of 151 rum, spiced rum, and tropical pineapple juice with a flaming presentation.",
        personality: "You're wild, passionate, and absolutely unforgettable. Your energy is explosive and contagious!"
    },
    10: {
        name: "The Apocalypse",
        emoji: "🔥",
        description: "Extreme, intense, and not for the faint-hearted - maximum chaos in a glass with absinth and multiple spirits.",
        personality: "You're the ultimate wild card! Your extraordinary boldness and unmatched intensity make you legendary!"
    }
};

// Quiz State
let currentQuestion = 1;
let score = 0;
let answers = [];

// Initialize Quiz
function initQuiz() {
    currentQuestion = 1;
    score = 0;
    answers = [];
    displayQuestion();
    updateProgress();
}

// Display Current Question
function displayQuestion() {
    const quizContainer = document.getElementById('quizContainer');
    const question = quizData[currentQuestion - 1];
    
    // Clear previous content
    quizContainer.innerHTML = '';
    
    // Create question section
    const questionSection = document.createElement('div');
    questionSection.className = 'question-section';
    questionSection.innerHTML = `
        <h2 class="question-title">${question.question}</h2>
        <div class="options">
            ${question.options.map((option, index) => `
                <div class="option ${answers[currentQuestion - 1] === index ? 'selected' : ''}">
                    <input 
                        type="radio" 
                        id="option${index}" 
                        name="answer" 
                        value="${index}"
                        ${answers[currentQuestion - 1] === index ? 'checked' : ''}
                        onchange="selectOption(${index})"
                    >
                    <label for="option${index}">${option.text}</label>
                </div>
            `).join('')}
        </div>
    `;
    
    quizContainer.appendChild(questionSection);
    updateButtons();
}

// Select an Option
function selectOption(index) {
    answers[currentQuestion - 1] = index;
    
    // Update visual selection
    const options = document.querySelectorAll('.option');
    options.forEach((option, i) => {
        if (i === index) {
            option.classList.add('selected');
        } else {
            option.classList.remove('selected');
        }
    });
}

// Navigate to Next Question
function nextQuestion() {
    if (answers[currentQuestion - 1] === undefined) {
        alert('Please select an answer before proceeding!');
        return;
    }
    
    if (currentQuestion < quizData.length) {
        currentQuestion++;
        displayQuestion();
        updateProgress();
    } else {
        calculateResult();
    }
}

// Navigate to Previous Question
function previousQuestion() {
    if (currentQuestion > 1) {
        currentQuestion--;
        displayQuestion();
        updateProgress();
    }
}

// Update Progress Bar
function updateProgress() {
    const progressPercentage = (currentQuestion / quizData.length) * 100;
    document.getElementById('progressFill').style.width = progressPercentage + '%';
    document.getElementById('currentQuestion').textContent = currentQuestion;
}

// Update Button States
function updateButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Show/hide previous button
    if (currentQuestion === 1) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    // Update next button text
    if (currentQuestion === quizData.length) {
        nextBtn.textContent = 'Get My Cocktail! 🍹';
    } else {
        nextBtn.textContent = 'Next →';
    }
}

// Calculate Result
function calculateResult() {
    score = 0;
    
    // Calculate total score
    answers.forEach((answerIndex, questionIndex) => {
        const question = quizData[questionIndex];
        score += question.options[answerIndex].value;
    });
    
    // Display result
    displayResult();
}

// Display Result
function displayResult() {
    const quizContainer = document.getElementById('quizContainer');
    const resultContainer = document.getElementById('resultContainer');
    const buttonContainer = document.getElementById('buttonContainer');
    
    // Hide quiz, show result
    quizContainer.innerHTML = '';
    buttonContainer.innerHTML = '';
    
    // Get drink data
    const drink = personalityDrinks[score];
    
    // Populate result
    document.getElementById('drinkName').textContent = drink.name;
    document.getElementById('drinkEmoji').textContent = drink.emoji;
    document.getElementById('drinkDescription').textContent = drink.description;
    document.getElementById('personalityText').textContent = `"${drink.personality}"`;
    
    resultContainer.classList.remove('hidden');
}

// Restart Quiz
function restartQuiz() {
    document.getElementById('resultContainer').classList.add('hidden');
    
    // Recreate button container
    const buttonContainer = document.getElementById('buttonContainer');
    buttonContainer.innerHTML = `
        <button id="prevBtn" class="btn btn-secondary" onclick="previousQuestion()" style="display:none;">← Previous</button>
        <button id="nextBtn" class="btn btn-primary" onclick="nextQuestion();">Next →</button>
    `;
    
    initQuiz();
}

// Event Listeners
document.getElementById('nextBtn').addEventListener('click', nextQuestion);
document.getElementById('prevBtn').addEventListener('click', previousQuestion);
document.getElementById('restartBtn').addEventListener('click', restartQuiz);

// Start Quiz on Load
window.addEventListener('load', initQuiz);
