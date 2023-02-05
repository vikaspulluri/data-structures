function minJumps(arr,n){
  //code here
  let cur = 0, jumps = 0;
  while (n > cur) {
      console.log({cur, value: arr[cur]})
      if (arr[cur] === 0) return -1;
      cur = arr[cur] + cur;
      jumps++;
  }
  return jumps;
}

console.log(minJumps([2,3,1,1,2,4,2,0,1,1], 10));
