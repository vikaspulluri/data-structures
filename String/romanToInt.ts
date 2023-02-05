export function romanToInt(s: string): number {
  const dict = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
  };
  let value = 0;
  for (let c = 0;c < s.length; c++) {
      if ((s[c] === 'I' && (s[c+1] === 'V' || s[c+1] === 'X'))
        || (s[c] === 'X' && (s[c+1] === 'L' || s[c+1] === 'C'))
        || (s[c] === 'C' && (s[c+1] === 'D' || s[c+1] === 'M'))) {
          value += dict[s[c+1]] - dict[s[c]];
          c++;
      } else {
          value += dict[s[c]];
      }
  }
  return value;
};