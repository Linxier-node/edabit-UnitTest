const {
  dayRate,
  daysInBudget,
  priceWithMonthlyDiscount,
} = require('../Problems/P007');

describe('dayRate', () => {
  test('should return 8', () => {
    expect(dayRate(8)).toBe(64);
  });
  test('should return 24', () => {
    expect(dayRate(24)).toBe(192);
  });
});

describe('daysInBudget', () => {
  test('should return 30', () => {
    expect(daysInBudget(1000, 8)).toBe(15);
  });
  test('should return 22', () => {
    expect(daysInBudget(1500, 24)).toBe(7);
  });
  test('should return 0', () => {
    expect(daysInBudget(1000, 0)).toBe(Infinity);
  });
});

describe('priceWithMonthlyDiscount', () => {
  test('calculates the price for full months with discount', () => {
    expect(priceWithMonthlyDiscount(100, 44, 0.1)).toBe(31680);
  });

  test('calculates the price for full months with no discount', () => {
    const ratePerHour = 80; // Rate of $80 per hour
    const numDays = 22; // Exactly one month
    const discount = 0; // No discount

    const expectedPrice = Math.ceil(22 * dayRate(ratePerHour));
    const actualPrice = priceWithMonthlyDiscount(
      ratePerHour,
      numDays,
      discount
    );

    expect(actualPrice).toBe(expectedPrice);
  });

  test('calculates the price for remaining days after full months', () => {
    const ratePerHour = 120; // Rate of $120 per hour
    const numDays = 25; // 1 month + 3 additional days
    const discount = 0.2; // 20% discount

    const expectedPrice = Math.ceil(
      1 * 22 * dayRate(ratePerHour) * (1 - discount) + 3 * dayRate(ratePerHour)
    );
    const actualPrice = priceWithMonthlyDiscount(
      ratePerHour,
      numDays,
      discount
    );

    expect(actualPrice).toBe(expectedPrice);
  });

  test('calculates the price for less than a month without discount', () => {
    const ratePerHour = 90;
    const numDays = 10; 
    const discount = 0; 

    const expectedPrice = Math.ceil(10 * dayRate(ratePerHour));
    const actualPrice = priceWithMonthlyDiscount(
      ratePerHour,
      numDays,
      discount
    );

    expect(actualPrice).toBe(expectedPrice);
  });

  
  
});
