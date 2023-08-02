/**
 * 46. Permutations
 */

function permutations(nums) {
  let results = [];

  if (nums.length === 1) return [nums.slice()];

  for (let i = 0; i < nums.length; i++) {
    const n = nums.shift();
    let perms = permutations(nums)
    for (let per of perms) {
      per.push(n);
    }
    results = [...results, ...perms];
    nums.push(n);
  }

  return results;
}

console.log(permutations([1, 2, 3]))