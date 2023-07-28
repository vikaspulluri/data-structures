import { blue } from './log';
import { performance } from 'perf_hooks';

export function logPerformance(fn, ...args) {
  const now = performance.now();
  const output = fn.call(this, ...args);
  blue(`${fn.name} => ${output} => ${performance.now() - now}`)
}
