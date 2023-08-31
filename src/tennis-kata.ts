const pointArray = ['love', '15', '30', '40'];

export const getGameResult = (game: number[]) => {
    const {a: playerA, b: playerB } = calculateScores(game);
    return determineScore(playerA, playerB);
}

const determineScore = (playerA: number, playerB: number) => {
    if (playerA >= 3 && playerB >= 3) {
        if (playerA === playerB + 1) {
            return 'Player A advantage';
        } else if (playerB === playerA + 1) {
            return 'Player B advantage';
        } else if (playerA === playerB) {
            return 'deuce';
        }
    }
    if (playerA === playerB) return `${getScoreText(playerA)} all`;
    return getWinner(playerA, playerB) ?? `${getScoreText(playerA)} - ${getScoreText(playerB)}`
}

const isDeuceOrAdvantage = (playerA: number, playerB: number) => (playerA >= 3 && playerB >= 3) && (playerA === playerB);

const getWinner = (playerA: number, playerB: number) => {
    if (playerA === 4) return 'Game Player A';
    if (playerB === 4) return 'Game Player B';
    return undefined;
}

const getScoreText = (score: number) => {
    return pointArray[score];
}

const calculateScores = (game: number[]) => {
    let players = { a: 0, b: 0 };
    game.map((score) => score === 0 ? players.a++ : players.b++ );
    return players;
}