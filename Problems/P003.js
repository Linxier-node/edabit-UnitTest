const programmers = (arr) => {
  const sorted = arr.sort((a, b) => a - b);
  return arr[arr.length - 1] - arr[0];
};

// console.log(programmers([222, 411, 1220]));
// console.log(programmers(147, 33, 526)); // Output: 493

module.exports = programmers;
