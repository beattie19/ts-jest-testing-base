import { getGameResult } from '../src/tennis-kata';
import { getSetResult } from '../src/tennis-kata-set';

const generateSetWinnerForPlayer = () => {
    return [
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
        [1,1,1,1],
    ]
}

describe('Tennis Set scoring', () => {
    test('Player B wins set', () => {
        expect(getSetResult(generateSetWinnerForPlayer())).toBe('Set Player B');
    })
});

describe('Tennis Game Scoring', () => {
    test('love - love', () => {
        expect(getGameResult([])).toBe('love all');
    })

    test('15 - love', () => {
        expect(getGameResult([0])).toBe('15 - love');
    })

    test('30 - love', () => {
        expect(getGameResult([0, 0])).toBe('30 - love');
    })

    test('40 - love', () => {
        expect(getGameResult([0, 0, 0])).toBe('40 - love');
    })

    test('love - 15', () => {
        expect(getGameResult([1])).toBe('love - 15');
    })

    test('30 - 30', () => {
        expect(getGameResult([0, 0, 1, 1])).toBe('30 all');
    })

    test('15 - 30', () => {
        expect(getGameResult([1, 0, 1])).toBe('15 - 30');
    })

    test('player A wins', () => {
        expect(getGameResult([0,0,0,0])).toBe('Game Player A');
    })

    test('player B wins', () => {
        expect(getGameResult([1,1,1,1])).toBe('Game Player B');
    })

    test('player B wins', () => {
        expect(getGameResult([1,1,1,1])).toBe('Game Player B');
    })

    test('deuce', () => {
        expect(getGameResult([1,1,1,0,0,0])).toBe('deuce');
    })

    test('Player A advantage', () => {
        expect(getGameResult([1,1,1,0,0,0,0])).toBe('Player A advantage');
    })

    test('Player B advantage', () => {
        expect(getGameResult([1,1,1,0,0,0,1])).toBe('Player B advantage');
    })

    test('Deuce after Advantage', () => {
        expect(getGameResult([1,1,1,0,0,0,1,0])).toBe('deuce');
    })

    test('2nd Advantage', () => {
        expect(getGameResult([1,1,1,0,0,0,1,0,1])).toBe('Player B advantage');
    })
});