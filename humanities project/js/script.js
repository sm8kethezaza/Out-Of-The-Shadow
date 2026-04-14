const maxScore = 5;
const minScore = -5;
let currentScore = 0;
let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;
let isAnswered = false;

// We will shuffle the data
let questions = [];

const screens = {
    start: document.getElementById('start-screen'),
    game: document.getElementById('game-screen'),
    end: document.getElementById('end-screen')
};

const UI = {
    progressionFill: document.getElementById('progression-fill'),
    scoreText: document.getElementById('score-text'),
    card: document.getElementById('card'),
    statementText: document.getElementById('statement-text'),
    resultTitle: document.getElementById('result-title'),
    explanationText: document.getElementById('explanation-text'),
    timerText: document.getElementById('timer-text'),
    timerProgress: document.querySelector('.timer-progress'),
    timerBg: document.querySelector('.timer-bg'),
    actions: document.querySelector('.actions'),
    nextBtn: document.getElementById('next-btn'),
    endTitle: document.getElementById('end-title'),
    endMessage: document.getElementById('end-message')
};

function initGame() {
    // Shuffle questions
    questions = [...quizData].sort(() => Math.random() - 0.5);
    currentScore = 0;
    currentQuestionIndex = 0;
    updateProgressionUI();
    showScreen('game');
    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    UI.card.classList.remove('flipped');
    
    // Slight delay to allow card to flip back before changing text
    setTimeout(() => {
        const q = questions[currentQuestionIndex];
        UI.statementText.textContent = `"${q.statement}"`;
        UI.actions.style.display = 'flex';
        startTimer();
    }, 300);
}

function startTimer() {
    timeLeft = 10;
    updateTimerUI();
    clearInterval(timer);
    timer = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        if (timeLeft <= 0) {
            clearInterval(timer);
            handleAnswer(null); // Timeout counts as wrong
        }
    }, 1000);
}

function updateTimerUI() {
    UI.timerText.textContent = timeLeft;
    const dashoffset = 283 - (timeLeft / 10) * 283;
    UI.timerProgress.style.strokeDashoffset = dashoffset;
}

function handleAnswer(guess) {
    if (isAnswered) return;
    isAnswered = true;
    clearInterval(timer);
    
    UI.actions.style.display = 'none';
    const q = questions[currentQuestionIndex];
    
    let isCorrect = (guess === q.isTrue);
    if (guess === null) isCorrect = false; // Timeout
    
    if (isCorrect) {
        currentScore++;
        UI.resultTitle.textContent = "Correct!";
        UI.resultTitle.style.color = "var(--kahoot-green)";
    } else {
        currentScore--;
        UI.resultTitle.textContent = guess === null ? "Time's Up!" : "Incorrect!";
        UI.resultTitle.style.color = "var(--kahoot-red)";
    }
    
    UI.explanationText.textContent = q.explanation;
    UI.card.classList.add('flipped');
    
    updateProgressionUI();
}

function updateProgressionUI() {
    // Score goes from -5 to +5. Map to 0% to 100%
    const percentage = ((currentScore - minScore) / (maxScore - minScore)) * 100;
    UI.progressionFill.style.width = `${percentage}%`;
    UI.scoreText.textContent = `Cave Depth: ${currentScore}`;
    
    // Platos Cave Metaphor: 
    // -5 = Dark (#120524), 0 = Purple (#46178f), 5 = Light (#fdfdfd)
    let r, g, b;
    if (currentScore <= 0) {
        // Dark to Purple
        const ratio = (currentScore - minScore) / (-minScore); // 0 to 1
        r = Math.floor(18 + ratio * (52));   // #12 (18) to #46 (70)
        g = Math.floor(5 + ratio * (18));    // #05 (5) to #17 (23)
        b = Math.floor(36 + ratio * (107));  // #24 (36) to #8f (143)
    } else {
        // Purple to Light
        const ratio = currentScore / maxScore; // 0 to 1
        r = Math.floor(70 + ratio * (183));  // #46 (70) to #fd (253)
        g = Math.floor(23 + ratio * (230));  // #17 (23) to #fd (253)
        b = Math.floor(143 + ratio * (110)); // #8f (143) to #fd (253)
    }
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    
    // Change text color if background gets too bright (closer to Light)
    if (currentScore >= 3) {
        document.body.style.color = '#333';
        UI.timerProgress.style.stroke = '#333';
        if (UI.timerBg) UI.timerBg.style.stroke = 'rgba(0,0,0,0.2)';
    } else {
        document.body.style.color = 'white';
        UI.timerProgress.style.stroke = 'var(--kahoot-yellow)';
        if (UI.timerBg) UI.timerBg.style.stroke = 'rgba(255,255,255,0.2)';
    }
}

function nextQuestion() {
    if (currentScore >= maxScore) {
        endGame(true);
    } else if (currentScore <= minScore) {
        endGame(false);
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            // Loop questions if run out
            currentQuestionIndex = 0;
            questions = [...quizData].sort(() => Math.random() - 0.5);
        }
        loadQuestion();
    }
}

function endGame(won) {
    showScreen('end');
    if (won) {
        UI.endTitle.textContent = "You Reached the Light!";
        UI.endMessage.textContent = "Congratulations! You have escaped the cave of ignorance and disinformation.";
        document.body.style.backgroundColor = 'var(--bg-light)';
        document.body.style.color = '#333';
    } else {
        UI.endTitle.textContent = "Lost in the Shadow...";
        UI.endMessage.textContent = "You have succumbed to the illusions of the cave. The media myths have claimed you.";
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}

function showScreen(screenName) {
    Object.values(screens).forEach(s => s.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', initGame);
document.getElementById('restart-btn').addEventListener('click', initGame);
document.getElementById('btn-truth').addEventListener('click', () => handleAnswer(true));
document.getElementById('btn-shadow').addEventListener('click', () => handleAnswer(false));
UI.nextBtn.addEventListener('click', nextQuestion);
