const choices = ['rock', 'paper', 'scissor'];
const playerDiv = document.getElementById('player');
const computerDiv = document.getElementById('computer');
const resultDiv = document.getElementById('result');
const playAgainButton = document.getElementById('play-again');
const icons = {
    'rock': '<i class="fas fa-hand-fist"></i>',
    'paper': '<i class="fas fa-hand"></i>',
    'scissor': '<i class="fas fa-hand-peace"></i>'
};

document.querySelectorAll('input[name="choice"]').forEach(input => {
    input.addEventListener('change', function() {
        const playerChoice = this.value;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];

        playerDiv.innerHTML = icons[playerChoice];
        computerDiv.innerHTML = icons[computerChoice];

        if (playerChoice === computerChoice) {
            resultDiv.innerText = 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissor') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissor' && computerChoice === 'paper')
        ) {
            resultDiv.innerText = 'You win!';
        } else {
            resultDiv.innerText = 'You lose!';
        }

        playAgainButton.style.display = 'block';
    });
});

playAgainButton.addEventListener('click', function() {
    playerDiv.innerHTML = '';
    computerDiv.innerHTML = '';
    resultDiv.innerText = '';
    document.querySelectorAll('input[name="choice"]').forEach(input => input.checked = false);
    playAgainButton.style.display = 'none';
});
