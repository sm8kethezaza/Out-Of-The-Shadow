// Game Settings
const maxLevel = 10;
const minLevel = 0;
let currentLevel = 3; // Starts in the dark
let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;
let isAnswered = false;

let questions = [];

// Audio Context setup for immediate Web Audio feedback
const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playSound(type) {
    if (!audioCtx) return;
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        osc.type = 'sine';
        osc.frequency.setValueAtTime(600, audioCtx.currentTime); // High pitch
        osc.frequency.exponentialRampToValueAtTime(1200, audioCtx.currentTime + 0.1);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.2);
    } else {
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(300, audioCtx.currentTime); // Low buzz
        osc.frequency.exponentialRampToValueAtTime(150, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0.3, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.3);
    }
}

// UI Elements
const UI = {
    startScreen: document.getElementById('start-screen'),
    gameScreen: document.getElementById('game-screen'),
    endScreen: document.getElementById('end-screen'),
    progressionFill: document.getElementById('progression-fill'),
    scoreText: document.getElementById('score-text'),
    card: document.getElementById('card'),
    statementText: document.getElementById('statement-text'),
    resultTitle: document.getElementById('result-title'),
    explanationText: document.getElementById('explanation-text'),
    timerText: document.getElementById('timer-text'),
    timerProgress: document.querySelector('.timer-progress'),
    actions: document.querySelector('.actions'),
    nextBtn: document.getElementById('next-btn'),
    endTitle: document.getElementById('end-title'),
    endMessage: document.getElementById('end-message'),
    flashOverlay: document.getElementById('flash-overlay')
};

function initGame() {
    initAudio();
    // Shuffle the geopolitical dataset
    questions = [...quizData].sort(() => Math.random() - 0.5);
    currentLevel = 3;
    currentQuestionIndex = 0;
    
    // Reset animations
    UI.endTitle.classList.remove('win-anim', 'lose-anim');
    document.body.style.backgroundColor = 'var(--bg-dark)';
    document.body.style.color = 'white';
    
    updateProgressionUI();
    showScreen(UI.gameScreen);
    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    UI.card.classList.remove('flipped');
    
    // Wait for flip animation before swapping text
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
    if (guess === null) isCorrect = false; 
    
    // Flash & Sound Feedback
    triggerFlash(isCorrect);
    playSound(isCorrect ? 'correct' : 'incorrect');
    
    if (isCorrect) {
        currentLevel++;
        UI.resultTitle.textContent = "Correct!";
        UI.resultTitle.style.color = "var(--kahoot-green)";
    } else {
        currentLevel--;
        UI.resultTitle.textContent = guess === null ? "Time's Up!" : "Incorrect!";
        UI.resultTitle.style.color = "var(--kahoot-red)";
    }
    
    UI.explanationText.textContent = q.explanation;
    UI.card.classList.add('flipped');
    
    updateProgressionUI();
}

function triggerFlash(isCorrect) {
    UI.flashOverlay.className = isCorrect ? 'flash-green' : 'flash-red';
    setTimeout(() => {
        UI.flashOverlay.className = '';
    }, 400); // Overlay disappears after 400ms
}

function updateProgressionUI() {
    // Width percentage based on 0 to 10
    const percentage = (currentLevel / maxLevel) * 100;
    UI.progressionFill.style.width = `${percentage}%`;
    UI.scoreText.textContent = `Level: ${currentLevel}/${maxLevel}`;
    
    // Background color transitioning metaphor (Cave of Plato)
    // Level 0: Black (#000000), Level 5: Kahoot Purple (#46178f), Level 10: White (#ffffff)
    let r, g, b;
    if (currentLevel <= 5) {
        const ratio = currentLevel / 5;
        r = Math.floor(ratio * 70);   // 0 to 70 (#46)
        g = Math.floor(ratio * 23);   // 0 to 23 (#17)
        b = Math.floor(ratio * 143);  // 0 to 143 (#8f)
        document.body.style.color = 'white';
        UI.timerProgress.style.stroke = 'var(--kahoot-yellow)';
        document.querySelector('.timer-bg').style.stroke = 'rgba(255,255,255,0.2)';
    } else {
        const ratio = (currentLevel - 5) / 5;
        r = Math.floor(70 + ratio * 185);   // 70 to 255
        g = Math.floor(23 + ratio * 232);   // 23 to 255
        b = Math.floor(143 + ratio * 112);  // 143 to 255
        
        // At high levels, switch text color for readability
        if (currentLevel >= 8) {
            document.body.style.color = '#333';
            UI.timerProgress.style.stroke = '#333';
            document.querySelector('.timer-bg').style.stroke = 'rgba(0,0,0,0.2)';
        }
    }
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function nextQuestion() {
    if (currentLevel >= maxLevel) {
        endGame(true);
    } else if (currentLevel <= minLevel) {
        endGame(false);
    } else {
        currentQuestionIndex++;
        if (currentQuestionIndex >= questions.length) {
            currentQuestionIndex = 0; // Loop if needed
            questions = [...quizData].sort(() => Math.random() - 0.5);
        }
        loadQuestion();
    }
}

function endGame(won) {
    showScreen(UI.endScreen);
    if (won) {
        UI.endTitle.textContent = "Bravo, you have reached the Truth!";
        UI.endTitle.classList.add('win-anim');
        UI.endMessage.textContent = "You have successfully escaped the cave of disinformation and shattered the media myths.";
        document.body.style.backgroundColor = 'var(--bg-light)';
        document.body.style.color = '#333';
    } else {
        UI.endTitle.textContent = "You have fallen into Ignorance...";
        UI.endTitle.classList.add('lose-anim');
        UI.endMessage.textContent = "The shadows of geopolitical manipulation have clouded your judgment.";
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
    }
}

function showScreen(screenEl) {
    UI.startScreen.classList.remove('active');
    UI.gameScreen.classList.remove('active');
    UI.endScreen.classList.remove('active');
    screenEl.classList.add('active');
}

// Event Listeners
document.getElementById('start-btn').addEventListener('click', initGame);
document.getElementById('restart-btn').addEventListener('click', initGame);
document.getElementById('home-btn').addEventListener('click', () => {
    clearInterval(timer);
    document.body.style.backgroundColor = 'var(--kahoot-purple)'; // Reset to generic purple for home
    document.body.style.color = 'white';
    showScreen(UI.startScreen);
});
document.getElementById('btn-truth').addEventListener('click', () => handleAnswer(true));
document.getElementById('btn-shadow').addEventListener('click', () => handleAnswer(false));
UI.nextBtn.addEventListener('click', nextQuestion);