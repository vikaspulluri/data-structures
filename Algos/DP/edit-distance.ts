export function editDistance(s1, s2, i = 0, j = 0) {
  if (i === s1.length) {
    return s2.length - j;
  } else if (j === s2.length) {
    return s1.length - i;
  } else if (s1[i] === s2[j]) {
    return editDistance(s1, s2, i + 1, j + 1);
  } else {
    return 1 + Math.min(
      editDistance(s1, s2, i + 1, j),
      editDistance(s1, s2, i, j + 1),
      editDistance(s1, s2, i + 1, j + 1)
    )
  }
}

export function editDistance_memo(s1, s2, i = 0, j = 0, lookup = {}) {
  const key = '' + i + j;
  if (lookup[key]) return lookup[key];
  if (i === s1.length) {
    lookup[key] = s2.length - j;
  } else if (j === s2.length) {
    lookup[key] = s1.length - i;
  } else if (s1[i] === s2[j]) {
    lookup[key] = editDistance_memo(s1, s2, i + 1, j + 1, lookup);
  } else {
    lookup[key] = 1 + Math.min(
      editDistance_memo(s1, s2, i + 1, j, lookup),
      editDistance_memo(s1, s2, i, j + 1, lookup),
      editDistance_memo(s1, s2, i + 1, j + 1, lookup)
    )
  }
  return lookup[key];
}
