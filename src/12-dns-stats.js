/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(/* domains */) {
  // let maxLength = 0;
  // for (let i = 0; i < domains.length; i++) {
  //   domains[i].split('.');
  // }
  // for (let j = 0; j < domains.length; j++) {
  //   if (domains[j] > maxLength) {
  //     maxLength = domains[j]
  //   }
  // }

  // for (let k = 0; k < domains.length; k++) {
  //   if (domains[k].includes(maxlength[maxLength.length-1]))
  // }
  throw new Error('Not implemented');
}

module.exports = getDNSStats;
