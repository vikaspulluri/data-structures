function getAllSubArrs(arr) {
  const n = arr.length;
  const subArrs = [];
  for (let i=0;i<n;i++) {
    for (let j=i;j<n;j++) {
      const subArr = [];
      for (let k=i;k<=j;k++) {
        subArr.push(arr[k]);
      }
      subArrs.push(subArr);
    }
  }
  return subArrs;
}

function maxSumOfSubArr(arr) {
  const n = arr.length;
  let max = -Infinity;
  for (let i=0;i<n;i++) {
    for (let j=i;j<n;j++) {
      let sum = 0;
      for (let k=i;k<=j;k++) {
        sum += arr[k];
      }
      max = Math.max(max, sum);
    }
  }
  return max;
}

function maxSumOfSubArr2(arr) {
  const n = arr.length;
  let max = -Infinity;
  for (let i=0;i<n;i++) {
    let sum = 0;
    for (let j=1;j<=n;j++) {
      if (i+j > n) break;
      sum += arr[i+j-1];
      max = Math.max(max, sum);
    }
  }
  return max;
}

function maxSumOfSubArr3(arr) {
  const n = arr.length;
  if (n === 1) return arr[0];

  const m = Math.floor(n/2);
  const left_max_sub_arr = maxSumOfSubArr3(arr.slice(0, m));
  const right_max_sub_arr = maxSumOfSubArr3(arr.slice(m));
  let left_sum = -Infinity, right_sum = -Infinity, sum = 0;
  for(let i=m;i<n;i++) {
    sum += arr[i];
    right_sum = Math.max(right_sum, sum);
  }
  for (let i=m-1;i>=0;i--) {
    sum += arr[i];
    left_sum = Math.max(left_sum, sum);
  }
  const ans = Math.max(left_max_sub_arr, right_max_sub_arr);
  return Math.max(ans, left_sum + right_sum);
}

function maxSumOfSubArrKadane(arr) {
  let ans = 0; let sum = 0;
  for (let i=0;i<arr.length;i++) {
    if (sum + arr[i] > 0) {
      sum += arr[i];
    } else {
      sum = 0;
    }
    ans = Math.max(sum, ans);
    console.log(sum, ans, arr[i])
  }
  return ans;
}

const arr = [1,2,3,4,5]
const subs = getAllSubArrs(arr);
console.log(subs);

const sumBrute = maxSumOfSubArr(arr)

const sumOpt1 = maxSumOfSubArr2(arr);

const sumOpt2 = maxSumOfSubArr3(arr);

const sumOptKadane = maxSumOfSubArrKadane(arr);

console.log({sumBrute, sumOpt1, sumOptKadane})
