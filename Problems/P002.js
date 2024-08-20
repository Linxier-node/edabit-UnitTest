/**
[2]Stuttering Function
Write a function that stutters a word as if someone is struggling to read it. The first two letters are repeated twice with an ellipsis ... and space after each, and then the word is pronounced with a question mark ?.
 */

const stutter = (word) => {
  let subStr = word.slice(0, 2);
  return `${subStr}...${subStr}...${word}`;
};

console.log(stutter('ahmed'));

module.exports = stutter;
