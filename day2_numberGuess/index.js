//GUESS THE NUMBER GAME

const min = 1;
const max = 100;
const answer = Math.floor(Math.random()*(max - min + 1)) + min;

let attempts = 0;
let guess;
let running = true;

while(running == true){
    guess = window.prompt(`Guess the number between ${min}-${max}`);
    guess = parseInt(guess);

    if(isNaN(guess)){
        window.alert(`Please enter a number`);
    }
    else if(guess<min || guess>max){
        window.alert(`Please enter a valid number`);
    }
    else{
        attempts++;
        if(guess < answer){
            window.alert("TOO LOW ! TRY AGAIN");
        }
        
        else if(guess > answer){
            window.alert("TOO HIGH ! TRY AGAIN");
        }
        else{
            window.alert(`🎉YOU WIN ! The answer was ${answer} and it took you ${attempts} attempts!!`);
            running = false;
        }
    }
}