/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const indexes = [];
  const arr2 = [];
  const answer = [];
  let sortIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      indexes.push(i);
    } else {
      arr2.push(arr[i]);
    }
  }
  const sorted = arr2.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (indexes.includes(i)) {
      answer.push(-1);
    } else {
      answer.push(sorted[sortIndex]);
      sortIndex++;
    }
  }
  return answer;
}

module.exports = sortByHeight;
