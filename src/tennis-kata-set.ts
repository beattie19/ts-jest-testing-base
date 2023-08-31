import { getGameResult } from "./tennis-kata"

export const getSetResult = (games: number[][]) => {
    let playerAGames = 0;
    let playerBGames = 0;
    for (const game of games) {
        const gameWinner = getGameResult(game);
        gameWinner[gameWinner.length - 1] === 'A' ? playerAGames++ : playerBGames++;
    }
    return ''
}