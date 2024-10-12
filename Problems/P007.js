// Problem link : https://exercism.org/tracks/javascript/exercises/freelancer-rates

function dayRate(ratePerHour) {
  return ratePerHour * 8;
}

function daysInBudget(budget, ratePerHour) {
  return Math.floor(budget / dayRate(ratePerHour));
}

function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
  const dayValue = dayRate(ratePerHour);
  const fullMonths = Math.floor(numDays / 22);
  const remainingDays = numDays % 22;
  const priceForFullMonths = fullMonths * 22 * dayValue * (1 - discount);
  const priceForRemainingDays = remainingDays * dayValue;
  return Math.ceil(priceForFullMonths + priceForRemainingDays);
}

module.exports = {
  dayRate,
  daysInBudget,
  priceWithMonthlyDiscount,
};
