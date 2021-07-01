import { bubble_sort } from "./bubble.sort";
import { insertion_sort } from "./insertion.sort";
import { selection_sort } from "./selection.sort";
import { bubbleSort, insertionSort, ProgressBar, randomArray, selectionSort } from "./util";

const Table = require('cli-table');

export class Stats {
  start;
  precision = 3; // 3 decimal places
  testInputs = [
    {inputSize: 100, inputRange: 500},
    {inputSize: 500, inputRange: 1000},
    {inputSize: 1000, inputRange: 5000},
    {inputSize: 10000, inputRange: 50000},
    {inputSize: 50000, inputRange: 90000},
    // {inputSize: 100000, inputRange: 500000},
  ];

  progressBar = new ProgressBar();
  tableHead = ['Input Size'].concat(this.testInputs.map(input => input.inputSize.toString()));
  table = new Table({ head: this.tableHead });

  elapsedTime(note) {
    var elapsed = process.hrtime(this.start)[1] / 1000000; // divide by a million to get nano to milli
    const time = process.hrtime(this.start)[0] + "s " + elapsed.toFixed(this.precision) + "ms"; // print message + time
    this.start = process.hrtime(); // reset the timer
    return time;
  }

  getStats(cb: Function, name = cb.name) {
    const bar = this.progressBar.create(name);
    bar.start(this.testInputs.length);
    this.start = process.hrtime();
    let data = {
      sort: {},
      array_generation: {'Array Generation': []}
    };
    data.sort[name] = [];
    this.testInputs.forEach(input => {
      data[input.inputSize] = {};
      const array = randomArray(input.inputSize, input.inputRange);
      data[input.inputSize].arrayGeneration = this.elapsedTime('Generating Array');
      data.array_generation['Array Generation'].push(data[input.inputSize].arrayGeneration);
      const sortedResult = cb(array);
      data[input.inputSize].time = this.elapsedTime(`${name} Sort Execution Time`);
      data.sort[name].push(data[input.inputSize].time);
      data[input.inputSize].comparisons = sortedResult.comparisons;
      data[input.inputSize].swaps = sortedResult.swaps;
      this.progressBar.increment(1);
    });
    bar.stop();
    return data;
  }


  getAllSortStats() {
    const bubbleStats = this.getStats(bubble_sort, bubbleSort);
    const insertionStats = this.getStats(insertion_sort, insertionSort);
    const selectionStats = this.getStats(selection_sort, selectionSort);
    const aggregate = [bubbleStats.sort, insertionStats.sort, selectionStats.sort, bubbleStats.array_generation];
    this.printStats(aggregate);
  }

  printStats(data) {
    Array.isArray(data) ? data.forEach(row => this.table.push(row)) : this.table.push(data);
    console.log(this.table.toString());
  }

}