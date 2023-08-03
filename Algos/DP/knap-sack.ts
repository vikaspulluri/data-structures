export function knap_sack(values, weights, k, i = 0) {
  if (i === values.length) return 0;
  else if (weights[i] > k) return knap_sack(values, weights, k, i + 1);
  else {
    return Math.max(values[i] + knap_sack(values, weights, k - weights[i], i + 1), knap_sack(values, weights, k, i + 1))
  }
}