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
        image: "https://images.unsplash.com/photo-1536628749-99a48ad67fa0?w=400&q=80",
        description: "Fresh, light, and incredibly refreshing - a hydrating blend of cucumber, lime, and mint with a hint of agave.",
        personality: "You're calm, introspective, and appreciate the simple pleasures in life. Your zen-like approach brings peace to any room."
    },
    1: {
        name: "Mojito",
        image: "https://images.unsplash.com/photo-1569302412814-68c7f7a9a51a?w=400&q=80",
        description: "The classic balance of minty freshness with a subtle kick. Light, accessible, and timeless.",
        personality: "You're steady and reliable, with a touch of charm. You value tradition but aren't afraid of a little spontaneity."
    },
    2: {
        name: "Margarita",
        image: "https://images.unsplash.com/photo-1571695657519-59a41802fc1d?w=400&q=80",
        description: "Zesty and sophisticated, with perfect balance of sweet, sour, and strong. A crowd favorite!",
        personality: "You're practical yet fun, balancing work and play seamlessly. People appreciate your friendly energy."
    },
    3: {
        name: "Strawberry Daiquiri",
        image: "https://images.unsplash.com/photo-1608687057248-d5d5eae3fa5a?w=400&q=80",
        description: "Sweet, fruity, and vibrant - a fun twist on a classic with fresh strawberries and rum.",
        personality: "You're naturally charming and bring color to every gathering. Your optimistic outlook is contagious!"
    },
    4: {
        name: "Pina Colada",
        image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
        description: "Tropical, creamy, and indulgent - tastes like a vacation in a glass.",
        personality: "You're adventurous and love to escape the mundane. Your free spirit and warmth make you unforgettable."
    },
    5: {
        name: "Long Island Iced Tea",
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80",
        description: "Bold, complex, and powerful - a mix of five spirits that packs a serious punch.",
        personality: "You're ambitious and bold, with a larger-than-life personality. You tackle challenges head-on with confidence."
    },
    6: {
        name: "Espresso Martini",
        image: "https://images.unsplash.com/photo-1608693332630-5f8e1a0f8e7a?w=400&q=80",
        description: "Sophisticated and energizing - coffee meets elegance with vodka, kahlúa, and a shake to perfection.",
        personality: "You're sharp, ambitious, and always buzzing with ideas. Your dynamic energy is unstoppable."
    },
    7: {
        name: "Cosmopolitan",
        image: "https://images.unsplash.com/photo-1601584942147-ba3ba2c870d8?w=400&q=80",
        description: "Chic, elegant, and refined - cranberry, vodka, and citrus create pure sophistication.",
        personality: "You're stylish and classy with impeccable taste. You know how to make an entrance and always look fabulous."
    },
    8: {
        name: "Whiskey Smash",
        image: "https://images.unsplash.com/photo-1541632511259-71acc5f3135e?w=400&q=80",
        description: "Strong, smoky, and intense - rye whiskey mixed with fresh lemon and a splash of thyme.",
        personality: "You're bold and fearless, with a strong personality. You don't follow trends; you set them."
    },
    9: {
        name: "Flaming Dragon",
        image: "https://images.unsplash.com/photo-1608270861620-7891c7c2c91d?w=400&q=80",
        description: "Fiery and explosive - a daring mix of 151 rum, spiced rum, and tropical pineapple juice with a flaming presentation.",
        personality: "You're wild, passionate, and absolutely unforgettable. Your energy is explosive and contagious!"
    },
    10: {
        name: "The Apocalypse",
        image: "https://images.unsplash.com/photo-1608270861620-7891c7c2c91d?w=400&q=80",
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
        nextBtn.textContent = 'Get My Cocktail!';
    } else {
        nextBtn.textContent = 'Next';
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
    
    // Hide quiz and buttons, show result
    quizContainer.style.display = 'none';
    buttonContainer.style.display = 'none';
    
    // Get drink data
    const drink = personalityDrinks[score];
    
    // Populate result
    document.getElementById('drinkImage').src = drink.image;
    document.getElementById('drinkImage').alt = drink.name;
    document.getElementById('drinkName').textContent = drink.name;
    document.getElementById('drinkDescription').textContent = drink.description;
    document.getElementById('personalityText').textContent = `"${drink.personality}"`;
    
    resultContainer.classList.remove('hidden');
}

// Restart Quiz
function restartQuiz() {
    document.getElementById('resultContainer').classList.add('hidden');
    document.getElementById('quizContainer').style.display = 'block';
    document.getElementById('buttonContainer').style.display = 'flex';
    
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
