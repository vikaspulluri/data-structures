import { blue, green, magenta, yellow } from "../log";
import { bubble_sort } from "./bubble.sort";
import { insertion_sort } from "./insertion.sort";
import { selection_sort } from "./selection.sort";
import { Stats } from "./stats";
import { bubbleSort, insertionSort, randomArray, selectionSort } from "./util";

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

  printStats() {
    const stats = new Stats();
    stats.getAllSortStats();
  }
  
}

const sim = new SortSimulator();
sim.printStats();