function set(n = 10000) {
  const now = Date.now();
  const set = new Set();
  for (let i = 0; i < n; i++) {
    set.add(Math.random() * n);
  }
  for (let i = 0; i < n; i++) {
    if (set.has(i));
  }
  console.log('performance set', Date.now() - now);
}

function map(n = 10000) {
  const now = Date.now();
  const map = new Map();
  for (let i = 0; i < n; i++) {
    const ran = Math.random() * n;
    map.set(ran, true);
  }
  for (let i = 0; i < n; i++) {
    if (map.has(i)) { };
  }
  console.log('performance map', Date.now() - now);
}

function array(n = 10000) {
  const now = Date.now();
  const arr = [];
  for (let i = 0; i < n; i++) {
    const ran = Math.random() * n;
    arr.push(ran);
  }
  for (let i = 0; i < n; i++) {
    if (arr.includes(i)) { };
  }
  console.log('performance array', Date.now() - now);
}

function brute(n = 10000) {
  const now = Date.now();
  for (let i = 0; i < n; i++) {
    const ran = Math.random() * n;
    for (let j = 0; j < n; j++) {
      if (ran > 5000) { }
    }
  }
  console.log('performance brute', Date.now() - now);
}

const n = 5e3;

set(n);
map(n);
array(n)
brute(n);