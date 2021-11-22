class Choice {
    constructor(yourChoice) {
        this.yourChoice = yourChoice;
    }

    getYourChoice = () => this.yourChoice;
    getPcChoice = () => this.randomPcChoice();

    randomPcChoice = () => {
        const allOptions = ["stone", "paper", "scissors"];

        return allOptions[Math.floor(Math.random() * allOptions.length)];
    }


}

class Result {
    static whoWin(playerChoice, PCchoice) {
        if (playerChoice === "stone" && PCchoice === "scissors" || playerChoice === "scissors" && PCchoice === "paper" || playerChoice === "paper" && PCchoice === "stone") return "player";
        else if ((PCchoice === "stone" && playerChoice === "scissors" || PCchoice === "scissors" && playerChoice === "paper" || PCchoice === "paper" && playerChoice === "stone")) return "pc";
        else return "draw";
    }
}

class Score {
    constructor(playerScore, pcScore,initStatusPlayer) {
        this.score = {
            playerScore: playerScore,
            pcScore: pcScore
        }
        this.statusPlayer;
    }

    getStatusPlayer = () => this.statusPlayer;

    getScore = () => this.score;


    resetScore = () => {
        this.score.playerScore = 0;
        this.score.pcScore = 0;
    }

    countScore = (player) => {
        switch (player) {
            case "player":
                this.statusPlayer = "win"
                this.score.playerScore++;
                break;
            case "pc":
                this.statusPlayer = "lose"
                this.score.pcScore++;
                break;
            default:
                this.statusPlayer = "draw"
                break;
        }
    }
}

class Game {
    constructor() {
        this.optionPc = document.querySelectorAll('.computer');
        this.optionPlayer = document.querySelectorAll('.image-choose');

        this.optionPlayer.forEach(option => option.addEventListener('click', this.startGame.bind(this)));


        this.scorePlayer = document.querySelector('.score-player');
        this.scoreComputer = document.querySelector('.score-computer');

        this.draw = document.querySelector('.logo-vs');

        this.score = new Score(0, 0);

        this.status;

        this.render.call(this, this.score.getScore());

    }

    startGame(e) {
        this.optionPc.forEach(choice => choice.className = 'image');


        this.choice = new Choice(e.target.dataset.option);

        if (e.target.dataset.option == "reset") {
            this.score.resetScore();
            this.draw.src="/images/VS.png"
        } else {
            
            const yourChoice = this.choice.getYourChoice(),
                PcChoice = this.choice.getPcChoice();

                console.log("player " +yourChoice);
                console.log("PC "+PcChoice);
    

            if (yourChoice === PcChoice) {
                [...this.optionPc].find(choice => choice.dataset.option === PcChoice).classList.add('computer-choose');
                this.draw.src = "/images/draw.png";
            } else {
                if (Result.whoWin(yourChoice, PcChoice) == "player") {
                    this.draw.src = "/images/player-win.png";
                } else {
                    this.draw.src = "/images/com-win.png";
                }
                [...this.optionPc].find(choice => choice.dataset.option === PcChoice).classList.add('computer-choose');
            }


            this.score.countScore(Result.whoWin(yourChoice, PcChoice));
        }

        this.status = this.score.getStatusPlayer();

        this.render.call(this, this.score.getScore());

    }

    render(score) {
        this.scorePlayer.textContent = `You: ${score.playerScore}`;
        this.scoreComputer.textContent = `PC: ${score.pcScore}`;
    }

    
}


const newGame = new Game();

function getName(name){
    gameresult = newGame;
    axios.post("/dashboard/user-game-history/add/"+name, gameresult).then(function (response) {
        console.log(response)
    })
}
