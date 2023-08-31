
export const getResult = (scores: number[]) => {
    const playerApoints = scores.filter((score) => score   === 0).length;
    const playerBpoints = scores.filter((score) => score   === 1).length;

    if (playerApoints === playerBpoints) {
        if (playerApoints === 3 && playerBpoints === 3) {
            return 'deuce';
        }

        return `${transformPointsToString(playerApoints)} all`;
    }

    if (canWin(playerApoints)) {
        if (canWin(playerBpoints)) {
            const advantagePlayer = playerApoints < playerBpoints ? 'Player B' : 'Player A';
            return `advantage ${advantagePlayer}`;
        } 

        return 'Game Player A'
    }

    if (canWin(playerBpoints) && !canWin(playerApoints)) {
        return 'Game Player B'
    }

    return generateStringScore(playerApoints, playerBpoints);
}

const canWin = (points: number) => {
    return points >= 3;
}

const generateStringScore = (playerApoints: number, playerBpoints: number) => {

    const playerApointsString = transformPointsToString(playerApoints);
    const playerBpointsString = transformPointsToString(playerBpoints);
    return `${playerApointsString} - ${playerBpointsString}`;
}

const transformPointsToString = (points: number) => {
    const pointsMax = points > 3 ? 3 : points;
    
    switch (pointsMax) {
        case 0:
            return 'love'
        case 1:
            return '15'
        case 2:
                return '30'
        case 3:
                return '40'
    }
}
