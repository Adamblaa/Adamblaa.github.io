const gameBoard = document.getElementById("game-board");
const clickCount = document.getElementById("click-count");
let firstkartya = null, secondkartya = null;
let lockBoard = false;
let clicks = 0;

const letters = "AABBCCDDEEFFGGHHIIJJKKLLMMNNOOPPQQRRSSTTUUVVWWXXYY".split("", 36).sort(() => 0.5 - Math.random());

function createBoard() {
    letters.forEach(letter => {
        const kartya = document.createElement("div");
        kartya.classList.add("kartya");
        kartya.dataset.letter = letter;
        kartya.addEventListener("click", porogkartya);
        gameBoard.appendChild(kartya);
    });
}

function porogkartya() {
    if (lockBoard || this === firstkartya) return;
    this.textContent = this.dataset.letter;
    this.classList.add("porget");
    
    if (!firstkartya) {
        firstkartya = this;
        return;
    }
    
    secondkartya = this;
    lockBoard = true;
    
    clicks++;
    clickCount.textContent = clicks;
    
    checkMatch();
}

function checkMatch() {
    if (firstkartya.dataset.letter === secondkartya.dataset.letter) {
        firstkartya = secondkartya = null;
        lockBoard = false;
        return;
    }
    
    setTimeout(() => {
        firstkartya.textContent = "";
        secondkartya.textContent = "";
        firstkartya.classList.remove("porget");
        secondkartya.classList.remove("porget");
        firstkartya = secondkartya = null;
        lockBoard = false;
    }, 1000);
}

createBoard();
