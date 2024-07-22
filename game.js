const choices = ["rock", "paper", "scissors"];
const rules = {
    rock: ["scissors"],
    paper: ["rock"],
    scissors: ["paper"],
};

document.querySelectorAll('.choice').forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.id;
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        const resultText = getResult(playerChoice, computerChoice);
        document.getElementById('result-text').innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}. ${resultText}`;
    });
});

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (rules[playerChoice].includes(computerChoice)) {
        return "You won!";
    } else {
        return "You lost!";
    }
}
