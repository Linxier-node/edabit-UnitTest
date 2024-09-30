// Problem link https://exercism.org/tracks/javascript/exercises/annalyns-infiltration

// Task 1: Implement a function named canExecuteFastAttack that takes a boolean value which indicates if the knight is awake. This function returns true if the 'Fast Attack' action is available based on the state of the character. Otherwise, returns false.

function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}

// Task 2: Implement a function named canSpy that takes three boolean values, indicating if the knight, archer and the prisoner, respectively, are awake. The function returns true if the 'Spy' action is available based on the state of the characters. Otherwise, returns false.

function canSpy(knightIsAwake, archerIsAwake, prisonerIsAwake) {
  return knightIsAwake || archerIsAwake || prisonerIsAwake;
}

// Task 3: Implement a function named canSignalPrisoner that takes two boolean values, indicating if the archer and the prisoner, respectively, are awake. The function returns true if the 'Signal Prisoner' action is available based on the state of the characters. Otherwise, returns false

function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  return !archerIsAwake && prisonerIsAwake;
}

// Task 4: Implement a function named canFreePrisoner that takes four boolean values. The first three parameters indicate if the knight, archer and the prisoner, respectively, are awake. The last parameter indicates if Annalyn's pet dog is present. The function returns true if the 'Free Prisoner' action is available based on the state of the characters and the prisoner's pet. Otherwise, returns false.

function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petIsPresent
) {
  return !knightIsAwake && !archerIsAwake && prisonerIsAwake && petIsPresent;
}
module.exports = {
  canExecuteFastAttack,
  canSpy,
  canSignalPrisoner,
  canFreePrisoner,
};
