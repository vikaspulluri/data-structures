/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime_brute = function (customers) {
  let penalty = Infinity;
  let hour = 0;
  let j = 0;
  while (j <= customers.length) {
    tmp = 0;
    for (let i = 0; i < customers.length; i++) {
      if ((customers[i] === 'Y' && j <= i)
        || (customers[i] === 'N' && i < j)
      ) {
        tmp++
      }
    }
    hour = tmp < penalty ? j : hour;
    penalty = Math.min(tmp, penalty);
    j++;
  }
  return hour;
};

var bestClosingTime_singlePass = function (customers) {
  let max = score = 0;
  let hour = -1;

  for (let i = 0; i < customers.length; i++) {
    let c = customers[i];
    c === 'Y' ? score++ : score--;

    if (score > max) {
      max = score;
      hour = i;
    }
  }
  return hour + 1;
};