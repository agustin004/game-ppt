const imgPlayerChoice = document.getElementById('playerChoice');
const imgComputerChoice = document.getElementById('computerChoice');

const pResult = document.getElementById('result')
const pScore = document.getElementById('score')

const buttons = document.querySelectorAll('button')
const choices = ['piedra', 'papel', 'tijera']
const fileName = {
    'piedra': 'images/rock.png',
    'papel': 'images/paper.png',
    'tijera': 'images/scissors.png',
};

let positiveScore = 0;
let negativeScore = 0;

buttons.forEach(
    button => button.addEventListener('click', startGame)
);

function startGame(event) { 
    // Determinar la eleccion del jugador
    const button = event.currentTarget
    const playerChoice = button.dataset.choice;
    console.log(playerChoice)

    // Determinar la eleccion de la computadora
    const computerChoice = getComputerChoice();
    console.log(computerChoice);

    // Determinar quien gana
    const winner = getWinner(playerChoice, computerChoice);
    console.log(`El  ganador es: ${winner}`)


    // Mostrar resultados
    imgPlayerChoice.setAttribute('src', fileName[playerChoice]);
    imgComputerChoice.setAttribute('src', fileName[computerChoice]);

    if(winner === 'player') { 
        result = 'ganas'
        ++positiveScore;
    } else if (winner === 'computer') {
        result = 'pierdes'
        ++negativeScore;

    } else { //empate
        result = 'empatas'

    }

    pResult.innerHTML = `Tu ${result} 
    escogiendo <strong>${playerChoice}</strong> en contra de <strong>${computerChoice}</strong>.`;

    pScore.innerHTML = `Has ganado ${positiveScore} veces.
    Has perdido ${negativeScore} veces.`

    
}

function getComputerChoice() {
    //obtener valor aleatorio
    const i = parseInt(Math.random() * 3);
    // vamos a devolver la eleccion de la computadora
    return choices[i];

}

function getWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return null;
    }
    if (playerChoice === 'piedra') {
        if (computerChoice === 'papel'){
            return 'computer';
        } else {// tijeras
            return 'player';

        }

    } else if (playerChoice === 'papel') {
        if (computerChoice === 'piedra'){
            return 'player'
        } else { // tijeras
            return 'computer'
        }


    } else { // 'tijeras'
        if (computerChoice === 'papel') {
            return 'player';
        } else {
            return 'computer';
        }

    }

}








