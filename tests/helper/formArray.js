function incrementalArray() {
  const increment = parseInt((Math.random()/Math.random()) * 10);
  let start = parseInt(Math.random() * 10);
  let arr = [start];
  while(arr.length < increment) {
    arr.push(arr[arr.length - 1] + increment);
  }
  return arr;
}

function randomArray() {
  const count = parseInt((Math.random()/Math.random()) * 10);
  let arr = [];
  while(arr.length <= count) {
    arr.push(parseInt((Math.random()/Math.random()) * count));
  }
  return arr;
  // one liner
  // return Array.from({length: count}, () => Math.floor(Math.random() * count));
}

module.exports = {
  incrementalArray,
  randomArray
}
