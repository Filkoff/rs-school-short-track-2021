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
function getDNSStats(domains) {
  const appear = {};

  for (let i = 0; i < domains.length; i++) {
    const domOne = domains[i].split('.').reverse();
    let str = '';
    for (let j = 0; j < domOne.length; j++) {
      str += `.${domOne[j]}`;
      if (!appear[str]) {
        appear[str] = 1;
      } else {
        appear[str]++;
      }
    }
  }
  return appear;
}
module.exports = getDNSStats;
