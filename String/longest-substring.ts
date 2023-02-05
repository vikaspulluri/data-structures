export function lengthOfLongestSubstring(s: string): number {
  const dict = {};
  let start = 0, result = 0;
  for (let cur=0;cur<s.length;cur++) {
      if (dict.hasOwnProperty(s[cur])) {
          const dupIdx = dict[s[cur]];
          result = Math.max(result, cur - start);
          Object.entries(dict).forEach(([key, value]) => {
              if (start <= value && value <= dupIdx) {
                  delete dict[key];
              }
          });
          start = dupIdx + 1;
      }
      dict[s[cur]] = cur;
  }
  return Math.max(result, s.length - start);
};