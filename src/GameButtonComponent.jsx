function GameControls({playerChoice, setPlayerChoice, setEnemyChoice, setResult, streak, setStreak}) {
    
    const choices = ["rock", "paper", "scissors"];

    const getResult = (player, enemy) => {
        if (player === enemy){
            return "Tie";
        }
        if ((player === "rock" && enemy === "scissors") ||
            (player === "paper" && enemy === "rock") || 
            (player === "scissors" && enemy === "paper")) {
                setStreak(streak + 1);
                return "Win";
            }
        setStreak(0);
        return "Lose";
    };

    const handlePlay = () => {
        if (!playerChoice) {
            return;
        }

        let count = 0;

        const interval = setInterval(() => {
            const random = choices[Math.floor(Math.random() * choices.length)];
            setEnemyChoice(random);
            count++;

            if (count === 3) {
                clearInterval(interval);

                const finalChoice = choices[Math.floor(Math.random() * choices.length)];
                setEnemyChoice(finalChoice);

                const outcome = getResult(playerChoice, finalChoice);
                setResult(outcome);
            }
        }, 500);
    };

    const handleReset = () => {
        setPlayerChoice(null);
        setEnemyChoice(null);
        setResult(null);
        setStreak(0);
    }
    
    return (
        <div className="controls">
            <button onClick={handlePlay}>Play</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
}

export default GameControls;