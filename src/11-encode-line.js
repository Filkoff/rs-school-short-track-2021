/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let arr = [];
  let answer = '';
  arr.push(str[0]);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      arr.push(str[i]);
    } else {
      if (arr.length > 1) {
        answer += (arr.length).toString();
      }
      answer += arr[0];
      arr = [];
      arr.push(str[i + 1]);
    }
  }
  return answer;
}

module.exports = encodeLine;
