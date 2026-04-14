// Game Settings
const maxLevel = 10;
const minLevel = 0;
let currentLevel = 3; // Starts in the dark (level 3)
let currentQuestionIndex = 0;
let timer;
let timeLeft = 10;
let isAnswered = false;
let pendingLevelChange = 0;

let questions = [];

// Audio Setup - Lo-Fi BGM & SFX
let isMuted = true; // Default state matching "Muted"
const bgm = document.getElementById('bgm');
bgm.volume = 0.4; // Chill volume

const AudioContext = window.AudioContext || window.webkitAudioContext;
let audioCtx;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new AudioContext();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function toggleMute() {
    isMuted = !isMuted;
    const muteBtn = document.getElementById('mute-btn');
    if (isMuted) {
        muteBtn.textContent = '🔇 Unmute';
        bgm.pause();
    } else {
        muteBtn.textContent = '🔊 Mute';
        initAudio();
        bgm.play().catch(e => console.log("Audio play blocked", e));
    }
}

function playSound(type) {
    if (isMuted || !audioCtx) return;
    
    // Create new oscillator for sound effect
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    if (type === 'correct') {
        // Joyous "Ding"
        osc.type = 'sine';
        osc.frequency.setValueAtTime(880, audioCtx.currentTime); // A5
        osc.frequency.setValueAtTime(1108.73, audioCtx.currentTime + 0.1); // C#6
        gainNode.gain.setValueAtTime(0, audioCtx.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.5, audioCtx.currentTime + 0.05);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
        osc.start(audioCtx.currentTime);
        osc.stop(audioCtx.currentTime + 0.5);
    } else {
        // Dull "Thud"
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
    avatar: document.getElementById('avatar'),
    scoreText: document.getElementById('score-text'),
    card: document.getElementById('card'),
    statementText: document.getElementById('statement-text'),
    resultTitle: document.getElementById('result-title'),
    explanationText: document.getElementById('explanation-text'),
    timerContainer: document.getElementById('timer-container'),
    timerText: document.getElementById('timer-text'),
    timerProgress: document.querySelector('.timer-progress'),
    actions: document.getElementById('actions-container'),
    nextBtn: document.getElementById('next-btn'),
    endTitle: document.getElementById('end-title'),
    endMessage: document.getElementById('end-message'),
    endVisual: document.getElementById('end-visual'),
    flashOverlay: document.getElementById('flash-overlay')
};

function initGame() {
    // Shuffle the dataset
    questions = [...quizData].sort(() => Math.random() - 0.5);
    currentLevel = 3;
    currentQuestionIndex = 0;
    pendingLevelChange = 0;
    
    // Reset animations
    UI.endTitle.classList.remove('win-anim', 'lose-anim');
    UI.endVisual.innerHTML = '';
    
    // Apply initial Cave theme and progress
    applyLevelTheme(currentLevel);
    updateProgressionBar(currentLevel, currentLevel);
    
    showScreen(UI.gameScreen);
    loadQuestion();
}

function loadQuestion() {
    isAnswered = false;
    
    // Fade card back to the Front
    UI.card.classList.remove('flipped');
    
    // Wait for the fade transition (0.4s) to finish before changing text
    setTimeout(() => {
        const q = questions[currentQuestionIndex];
        UI.statementText.textContent = `"${q.statement}"`;
        
        // Show buttons and timer again
        UI.actions.style.visibility = 'visible';
        UI.actions.style.opacity = '1';
        UI.timerContainer.style.visibility = 'visible';
        UI.timerContainer.style.opacity = '1';
        
        startTimer();
    }, 400); 
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
    
    // Hide Truth/Shadow buttons and timer completely
    UI.actions.style.visibility = 'hidden';
    UI.timerContainer.style.visibility = 'hidden';

    const q = questions[currentQuestionIndex];
    let isCorrect = (guess === q.isTrue);
    if (guess === null) isCorrect = false; 
    
    // Flash & Sound Feedback
    triggerFlash(isCorrect);
    playSound(isCorrect ? 'correct' : 'incorrect');
    
    // Calculate pending level change, but DON'T apply it to the UI yet
    pendingLevelChange = isCorrect ? 1 : -1;
    
    if (isCorrect) {
        UI.resultTitle.textContent = "Correct!";
        UI.resultTitle.style.color = "var(--kahoot-green)";
    } else {
        UI.resultTitle.textContent = guess === null ? "Time's Up!" : "Incorrect!";
        UI.resultTitle.style.color = "var(--kahoot-red)";
    }
    
    UI.explanationText.textContent = q.explanation;
    
    // Trigger fade to explanation
    UI.card.classList.add('flipped');
}

function triggerFlash(isCorrect) {
    UI.flashOverlay.className = isCorrect ? 'flash-green' : 'flash-red';
    setTimeout(() => {
        UI.flashOverlay.className = '';
    }, 400);
}

function applyLevelTheme(level) {
    // Cave of Plato Metaphor: Level 0 (Black), Level 5 (Purple), Level 10 (White)
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

function updateProgressionBar(newLevel, oldLevel) {
    // 1. Horizontal Progress Bar (Header)
    const percentage = (newLevel / maxLevel) * 100;
    UI.progressionFill.style.width = `${percentage}%`;
    UI.scoreText.textContent = `Level: ${newLevel}/${maxLevel}`;
    
    // 2. Vertical Avatar of Truth (Sidebar)
    // The track is inside #track-line which has top:40px, bottom:40px.
    // Calculate bottom percentage based on level.
    UI.avatar.style.bottom = `calc(40px + ${percentage}% * (100% - 80px))`;
    
    // Face character slightly to show expression
    if (newLevel > oldLevel) {
        UI.avatar.textContent = '🧗‍♂️'; // Climbing up energetically
    } else if (newLevel < oldLevel) {
        UI.avatar.textContent = '🤦‍♂️'; // Falling down/Facepalm
    } else {
        UI.avatar.textContent = '🧗‍♂️'; // Default
    }
}

function processNextChallenge() {
    const oldLevel = currentLevel;
    // 1. User clicked "Next Question", update the level
    currentLevel += pendingLevelChange;
    pendingLevelChange = 0;
    
    // 2. Visually update the UI (Avatar climbing + Colors shifting)
    updateProgressionBar(currentLevel, oldLevel);
    applyLevelTheme(currentLevel);
    
    // 3. Wait 1s so the user sees the avatar move BEFORE loading next card
    setTimeout(() => {
        if (currentLevel >= maxLevel) {
            endGame(true);
        } else if (currentLevel <= minLevel) {
            endGame(false);
        } else {
            currentQuestionIndex++;
            if (currentQuestionIndex >= questions.length) {
                currentQuestionIndex = 0;
                questions = [...quizData].sort(() => Math.random() - 0.5);
            }
            loadQuestion(); // Fades back to the front
        }
    }, 1000); 
}

function endGame(won) {
    showScreen(UI.endScreen);
    bgm.pause();
    isMuted = true;
    document.getElementById('mute-btn').textContent = '🔇 Unmute';
    
    if (won) {
        // Successful avatar out of the cave
        UI.endVisual.innerHTML = '<div class="win-icon">🌞🧗‍♂️✨</div>';
        UI.endTitle.textContent = "Bravo, you have reached the Truth!";
        UI.endTitle.classList.add('win-anim');
        UI.endMessage.textContent = "You have successfully escaped the cave of disinformation and shattered the media myths.";
        document.body.style.backgroundColor = 'var(--bg-light)';
        document.body.style.color = '#333';
    } else {
        // Loser avatar stuck in the cave
        UI.endVisual.innerHTML = '<div class="lose-icon">🕳️🙍‍♂️🌑</div>';
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
    document.body.style.backgroundColor = 'var(--kahoot-purple)';
    document.body.style.color = 'white';
    showScreen(UI.startScreen);
    bgm.pause();
    isMuted = true;
    document.getElementById('mute-btn').textContent = '🔇 Unmute';
});
document.getElementById('mute-btn').addEventListener('click', toggleMute);

document.getElementById('btn-truth').addEventListener('click', () => handleAnswer(true));
document.getElementById('btn-shadow').addEventListener('click', () => handleAnswer(false));
UI.nextBtn.addEventListener('click', processNextChallenge);

// Initial state
document.body.style.backgroundColor = 'var(--kahoot-purple)';
