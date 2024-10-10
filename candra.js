const gameArea = document.getElementById('game-area');
const scoreDisplay = document.getElementById('score');
const startBtn = document.getElementById('start-btn');

let score = 0;
let gameActive = false;

startBtn.addEventListener('click', startGame);

function startGame() {
    score = 0;
    gameActive = true;
    scoreDisplay.textContent = `Skor: ${score}`;
    startBtn.disabled = true;

    spawnMouse();

    setTimeout(endGame, 10000);

    function spawnMouse() {
        if (!gameActive) return;

        const mouse = document.createElement('div');
        mouse.classList.add('mouse');

        const x = Math.floor(Math.random() * 260);
        const y = Math.floor(Math.random() * 260);
        mouse.style.left = `${x}px`;
        mouse.style.top = `${y}px`;

        mouse.addEventListener('click', () => {
            score++;
            scoreDisplay.textContent = `Skor: ${score}`;
            mouse.remove();
            spawnMouse();
        });

        gameArea.appendChild(mouse);

        setTimeout(() => {
            if (mouse.parentElement) {
                mouse.remove();
                spawnMouse();
            }
        }, 1000);
    }

    function endGame() {
        gameActive = false;
        alert(`Waktu habis! Skor akhir kamu: ${score}`);
        startBtn.disabled = false;
    }
}
