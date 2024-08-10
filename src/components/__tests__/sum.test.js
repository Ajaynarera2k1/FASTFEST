import { sum } from "../sum";

test('test for sum method', () => { 

    const Return = sum(4,5);
    expect(Return).toBe(9);
 });