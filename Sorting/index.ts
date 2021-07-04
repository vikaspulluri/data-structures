import { blue, green, magenta, yellow } from "../log";
import { bubble_sort } from "./bubble.sort";
import { insertion_sort } from "./insertion.sort";
import { i_merge_sort, r_merge_sort } from "./merge.sort";
import { quick_sort } from "./quick.sort";
import { selection_sort } from "./selection.sort";
import { Stats } from "./stats";
import { bubbleSort, iMergeSort, insertionSort, randomArray, rMergeSort, selectionSort } from "./util";

const array = randomArray(100);

class SortSimulator {

  constructor() {}

  initAll() {
    this.bubbleSort();
    this.insertionSort();
  }

  bubbleSort() {
    console.time(bubbleSort);
    const bubble1 = bubble_sort(array.slice());
    console.timeEnd(bubbleSort);
    magenta(`Comparisons: ${bubble1.comparisons}`);
    yellow(`Swaps: ${bubble1.swaps}`);
    blue(`Array: ${bubble1.result}`);
  }

  insertionSort() {
    console.time(insertionSort);
    const insertion = insertion_sort(array.slice());
    console.timeEnd(insertionSort);
    magenta(`Comparisons: ${insertion.comparisons}`);
    yellow(`Swaps: ${insertion.swaps}`);
    blue(`Array: ${insertion.result}`);
  }

  selectionSort() {
    console.time(selectionSort);
    const selection = selection_sort(array.slice());
    console.timeEnd(selectionSort);
    magenta(`Comparisons: ${selection.comparisons}`);
    yellow(`Swaps: ${selection.swaps}`);
    blue(`Array: ${selection.result}`);
  }

  quickSort() {
    console.time(selectionSort);
    const quick = quick_sort([...array.slice(), Infinity]);
    console.timeEnd(selectionSort);
    magenta(`Comparisons: ${quick.comparisons}`);
    yellow(`Swaps: ${quick.swaps}`);
    blue(`Array: ${quick.result}`);
  }

  imergeSort() {
    console.time(iMergeSort);
    const merge = i_merge_sort(array.slice());
    console.timeEnd(iMergeSort);
    magenta(`Comparisons: ${merge.comparisons}`);
    yellow(`Swaps: ${merge.swaps}`);
    blue(`Array: ${merge.result}`);
  }
  rmergeSort() {
    console.time(rMergeSort);
    const merge = r_merge_sort(array.slice());
    console.timeEnd(rMergeSort);
    magenta(`Comparisons: ${merge.comparisons}`);
    yellow(`Swaps: ${merge.swaps}`);
    blue(`Array: ${merge.result}`);
  }

  printStats() {
    const stats = new Stats();
    stats.getAllSortStats();
  }
  
}

const sim = new SortSimulator();
sim.printStats();
// sim.imergeSort();
// sim.rmergeSort();