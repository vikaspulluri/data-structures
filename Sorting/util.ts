const cliProgress = require('cli-progress');

export const bubbleSort = 'Bubble Sort';
export const insertionSort = 'Insertion Sort';
export const selectionSort = 'Selection Sort';
export const quickSort = 'Quick Sort';
export const mergeSort = 'Merge Sort';
export const iMergeSort = 'Iterative Merge Sort';
export const rMergeSort = 'Recursive Merge Sort';
export const countSort = 'Count Sort';
export const bucketSort = 'Bucket Sort';
export const shellSort = 'Shell Sort';
export const radixSort = 'Radix Sort';
export const heapSort = 'Heap Sort';

export interface SortResult {
  swaps: number;
  comparisons: number;
  result: number[];
}

export class Result implements SortResult {
  swaps = 0;
  comparisons = 0;
  result = null;
}

export const randomArray = (length: number, range = 500) => new Array(length).fill(0).map(i => Math.floor(Math.random() * range));

export class ProgressBar {
  public bar;
  create(name: string) {
    this.bar = new cliProgress.SingleBar({
      format: `${name} |' + '{bar}' + '| {percentage}% || {value}/{total} Tests`,
      barCompleteChar: '\u2588',
      barIncompleteChar: '\u2591',
      hideCursor: true
    });
    return this.bar;
  }

  start(total) {
    this.bar.start(total, 0);
  }

  update(value) {
    this.bar.update(value);
  }

  increment(value) {
    this.bar.increment(value);
  }

  stop() {
    this.bar.stop();
  }
}