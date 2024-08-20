const programmers = require('../Problems/P003');

describe('programmers wages diff', () => {
  test('should return difference between highest and lowest wage 147,33,526', () => {
    const wages = [147, 33, 526];
    const output = 526-33;
    expect(programmers(wages)).toEqual(output);
  });

  test('should return diff between highest and lowest 222,411,1220', () => { 
    const wages = [222, 411, 1220];
    const output = 1220 - 222;
    expect(programmers(wages)).toEqual(output);
   })

   test('should handle cases with same wages', () => {
    const wages = [50, 50, 50];
    expect(programmers(wages)).toEqual(0);
  });
  
  test('should handle large numbers', () => {
    const wages = [1000000, 1, 500000];
    expect(programmers(wages)).toEqual(999999);
  });
});
