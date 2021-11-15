import { add } from "../src/calc";

describe('test addition', () => {
    test('1 + 1 = 2', () => {
        expect(add(1,1)).toBe(2);
    });
});