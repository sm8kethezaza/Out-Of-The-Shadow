// Game Settings
const maxLevel = 10;
const minLevel = 0;
let currentLevel = 3; // Starts in the dark (level 3)
let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;
let isAnswered = false;
let pendingLevelChange = 0; // Stores the +1 or -1 until "Next Question" is clicked

let questions = [];

// Audio Setup
let isMuted = true; // Start muted to comply with browser autoplay policies
const bgm = document.getElementById('bgm');
bgm.volume = 0.4;

const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
    if (!audioCtx) audioCtx = new AudioContext();
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    if (!isMuted) {
        bgm.play().catch(e => console.log("Autoplay blocked for BGM"));
    }
}

function toggleMute() {
    isMuted = !isMuted;
    const muteBtn = document.getElementById('mute-btn');
    if (isMuted) {
        muteBtn.textContent = '🔈 Muted';
        bgm.pause();
    } else {
        muteBtn.textContent = '🔊 Unmute';
        initAudio();
        bgm.play();
    }
}

function playSound(type) {
    if (isMuted || !audioCtx) return;
    
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        // Joyous "Ding" (Positive SFX)
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
        osc.frequency.setValueAtTime(1108.73, audioCtx.currentTime + 0.1); // C#6
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.5);
    } else {
        // Dull "Thud" (Negative/Mat SFX)
        osc.type = 'square';
        osc.frequency.setValueAtTime(150, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(40, audioCtx.currentTime + 0.2);
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.6, audioCtx.currentTime + 0.02);
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
    // Shuffle the dataset
    questions = [...quizData].sort(() => Math.random() - 0.5);
    currentLevel = 3;
    currentQuestionIndex = 0;
    pendingLevelChange = 0;
    
    // Reset animations
    UI.endTitle.classList.remove('win-anim', 'lose-anim');
    
    // Apply Kahoot Purple theme initially or Cave theme
    applyLevelTheme(currentLevel);
    updateProgressionBar(currentLevel);
    
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
    }, 400); // Wait until the card has flipped completely to face front
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
    
    // Calculate pending level change, but DON'T apply it to the UI yet (Pedagogy)
    pendingLevelChange = isCorrect ? 1 : -1;
    
    if (isCorrect) {
        UI.resultTitle.textContent = "Correct!";
        UI.resultTitle.style.color = "var(--kahoot-green)";
    } else {
        UI.resultTitle.textContent = guess === null ? "Time's Up!" : "Incorrect!";
        UI.resultTitle.style.color = "var(--kahoot-red)";
    }
    
    UI.explanationText.textContent = q.explanation;
    
    // Flip the card to show the explanation, text is pre-rotated to be readable
    UI.card.classList.add('flipped');
}

function triggerFlash(isCorrect) {
    UI.flashOverlay.className = isCorrect ? 'flash-green' : 'flash-red';
    setTimeout(() => {
        UI.flashOverlay.className = '';
    }, 400); // Overlay disappears after 400ms
}

function applyLevelTheme(level) {
    // Cave of Plato Metaphor:
    // Level 0: Pitch Black (#0a0212), Level 5: Kahoot Purple (#46178f), Level 10: White (#ffffff)
    let r, g, b;
    if (level <= 5) {
        const ratio = level / 5;
        r = Math.floor(10 + ratio * 60);   // 10 to 70 (#46)
        g = Math.floor(2 + ratio * 21);    // 2 to 23 (#17)
        b = Math.floor(18 + ratio * 125);  // 18 to 143 (#8f)
        document.body.style.color = 'white';
        UI.timerProgress.style.stroke = 'var(--kahoot-yellow)';
        document.querySelector('.timer-bg').style.stroke = 'rgba(255,255,255,0.2)';
    } else {
        const ratio = (level - 5) / 5;
        r = Math.floor(70 + ratio * 185);   // 70 to 255
        g = Math.floor(23 + ratio * 232);   // 23 to 255
        b = Math.floor(143 + ratio * 112);  // 143 to 255
        
        // At high levels (Truth), text color changes for readability
        if (level >= 8) {
            document.body.style.color = '#333';
            UI.timerProgress.style.stroke = '#333';
            document.querySelector('.timer-bg').style.stroke = 'rgba(0,0,0,0.2)';
        } else {
            document.body.style.color = 'white';
            UI.timerProgress.style.stroke = 'var(--kahoot-yellow)';
            document.querySelector('.timer-bg').style.stroke = 'rgba(255,255,255,0.2)';
        }
    }
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function updateProgressionBar(level) {
    const percentage = (level / maxLevel) * 100;
    UI.progressionFill.style.width = `${percentage}%`;
    UI.scoreText.textContent = `Level: ${level}/${maxLevel}`;
}

function processNextChallenge() {
    // 1. User clicked "Next Question", now we update the level (Cave progression)
    currentLevel += pendingLevelChange;
    pendingLevelChange = 0;
    
    // 2. Visually update the UI (Bar + Colors)
    updateProgressionBar(currentLevel);
    applyLevelTheme(currentLevel);
    
    // 3. Wait a moment so the user sees the consequence (level up/down) before flipping
    setTimeout(() => {
        if (currentLevel >= maxLevel) {
            endGame(true);
        } else if (currentLevel <= minLevel) {
            endGame(false);
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
                currentQuestionIndex = 0; // Loop if dataset exhausted
                questions = [...quizData].sort(() => Math.random() - 0.5);
            }
            loadQuestion(); // Flips card back and loads new text
        }
    }, 1000); // 1 second delay to absorb the color and level change
}

function endGame(won) {
    showScreen(UI.endScreen);
    bgm.pause(); // Stop background music at the end
    
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
        document.body.style.backgroundColor = 'var(--bg-dark)';
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
    document.body.style.backgroundColor = 'var(--kahoot-purple)'; // Reset to Kahoot purple
    document.body.style.color = 'white';
    showScreen(UI.startScreen);
    bgm.pause();
});
document.getElementById('mute-btn').addEventListener('click', toggleMute);

document.getElementById('btn-truth').addEventListener('click', () => handleAnswer(true));
document.getElementById('btn-shadow').addEventListener('click', () => handleAnswer(false));
UI.nextBtn.addEventListener('click', processNextChallenge);

// Initial state
document.body.style.backgroundColor = 'var(--kahoot-purple)';