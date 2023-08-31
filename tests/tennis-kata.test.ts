import { getResult } from '../src/tennis-kata';

describe('Tennis Kata', () => {
    test('games not started: love - love', () => {
        expect(getResult([])).toBe('love - love');
    })


    test('love - love', () => {
        expect(getResult([[0, 0]])).toBe('love - love');
    });
    
    test('love - 15', () => {
        expect(getResult([[0, 1]])).toBe('love - 15');
    });

    test('love - 30', () => {
        expect(getResult([[0, 1], [1, 0]])).toBe('love - 30');
    });

    test('love - 40', () => {
        expect(getResult([[0, 3]])).toBe('love - 40');
    });



})