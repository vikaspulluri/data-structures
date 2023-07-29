import { blue, red, yellow } from './log';
import { performance } from 'perf_hooks';

export function logPerformance(fn, ...args) {
  if (typeof fn !== 'function') {
    red('Expected function but received ' + typeof fn);
    return;
  }
  const now = performance.now();
  const output = fn.call(this, ...args);
  // console.log('input:', args);
  blue(`${fn.name}: => output: ${output} => time: ${performance.now() - now}`)
}
