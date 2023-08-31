import { getResult } from '../src/tennis-kata';

describe('Tennis Kata', () => {
    test('love - love', () => {
        expect(getResult([])).toBe('love all');
    })

    test('love - 15', () => {
        expect(getResult([1])).toBe('love - 15');
    })

    test('15 - love', () => {
        expect(getResult([0])).toBe('15 - love');
    })

    test('love - 30', () => {
        expect(getResult([1, 1])).toBe('love - 30');
    })

    test('30 - 30', () => {
        expect(getResult([1, 0, 1, 0])).toBe('30 all');
    })

    test('40 all gives deuce', () => {
        expect(getResult([1, 1, 0, 1, 0, 0])).toBe('deuce');
    })

    test('advantage player B', () => {
        expect(getResult([1, 1, 0, 1, 0, 0, 1])).toBe('advantage Player B');
    })

    test('advantage player A', () => {
        expect(getResult([0, 0, 1, 0, 1, 1, 0])).toBe('advantage Player A');
    })

    test('player A wins', () => {
        expect(getResult([0, 0, 0, 0])).toBe('Game Player A');
    })

    test('player B wins', () => {
        expect(getResult([1, 1, 1, 1])).toBe('Game Player B');
    })

    test('deuce 2', () => {
        expect(getResult([1, 1, 1, 0, 0, 0, 0, 1])).toBe('deuce');
    })
});