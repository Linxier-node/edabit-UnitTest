const {
  canExecuteFastAttack,
  canSpy,
  canSignalPrisoner,
  canFreePrisoner,
} = require('../Problems/P005');

// Task 1: Test canExecuteFastAttack
describe('canExecuteFastAttack', () => {
  test('should return true if the knight is asleep', () => {
    expect(canExecuteFastAttack(false)).toBe(true);
  });

  test('should return false if the knight is awake', () => {
    expect(canExecuteFastAttack(true)).toBe(false);
  });
});

// Task 2: Test canSpy
describe('canSpy', () => {
  test('should return true if any of the knight, archer, or prisoner is awake', () => {
    expect(canSpy(true, false, false)).toBe(true);
    expect(canSpy(false, true, false)).toBe(true);
    expect(canSpy(false, false, true)).toBe(true);
  });

  test('should return false if none of the knight, archer, or prisoner are awake', () => {
    expect(canSpy(false, false, false)).toBe(false);
  });
});

// Task 3: Test canSignalPrisoner
describe('canSignalPrisoner', () => {
  test('should return true if the archer is asleep and the prisoner is awake', () => {
    expect(canSignalPrisoner(false, true)).toBe(true);
  });

  test('should return false if the archer is awake or the prisoner is not awake', () => {
    expect(canSignalPrisoner(true, true)).toBe(false);
    expect(canSignalPrisoner(true, false)).toBe(false);
    expect(canSignalPrisoner(false, false)).toBe(false);
  });
});

// Task 4: Test canFreePrisoner
describe('canFreePrisoner', () => {
  test('should return true if the knight and archer are both asleep, the prisoner is awake, and the pet is present', () => {
    expect(canFreePrisoner(false, false, true, true)).toBe(true);
  });

  test('should return false if any of knight or archer is awake, or the prisoner is not awake, or the pet is not present', () => {
    expect(canFreePrisoner(true, false, true, true)).toBe(false); // knight awake
    expect(canFreePrisoner(false, true, true, true)).toBe(false); // archer awake
    expect(canFreePrisoner(false, false, false, true)).toBe(false); // prisoner not awake
    expect(canFreePrisoner(false, false, true, false)).toBe(false); // pet not present
  });
});
