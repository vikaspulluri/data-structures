function every(n = 10000) {
  const now = Date.now();
  const arr = new Array(n).fill(0).map((v) => (Math.random() * n));
  const valid = arr.every(v => v > 0);
  console.log('performance every', Date.now() - now);
}

function forLoop(n = 10000) {
  const now = Date.now();
  const arr = new Array(n).fill(0).map((v) => (Math.random() * n));
  let valid;
  for (let i = 0; i < arr.length; i++) {
    valid = arr[i] > 0;
  }
  console.log('performance forLoop', Date.now() - now);
}

function forOf(n = 10000) {
  const now = Date.now();
  const arr = new Array(n).fill(0).map((v) => (Math.random() * n));
  let valid;
  for (let val of arr) {
    valid = val > 0;
  }
  console.log('performance forOf', Date.now() - now);
}

const n = 1e8;
every(n);
forLoop(n);
forOf(n);

function getObjectWithValidValues(sourceObj) {
  const response = { valid: false, copiedObj: {} };
  for (const [key, value] of Object.entries(sourceObj)) {
    if (value) {
      response.valid = true;
      response.copiedObj[key] = value;
    }
  }
  return response;
}
