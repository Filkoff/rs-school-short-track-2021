/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = -900000000000000;
  let temp;
  const str = n.toString();
  for (let i = 0; i < str.length; i++) {
    temp = parseInt(str.slice(0, i) + str.slice(i + 1), 10);
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

module.exports = deleteDigit;
