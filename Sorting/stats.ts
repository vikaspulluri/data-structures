import { bgMagenta } from "../log";
import { bubble_sort } from "./bubble.sort";
import { bucket_sort } from "./bucket.sort";
import { count_sort } from "./count.sort";
import { insertion_sort } from "./insertion.sort";
import { i_merge_sort, r_merge_sort } from "./merge.sort";
import { quick_sort } from "./quick.sort";
import { selection_sort } from "./selection.sort";
import { bubbleSort, bucketSort, countSort, iMergeSort, insertionSort, ProgressBar, quickSort, randomArray, rMergeSort, selectionSort } from "./util";

const Table = require('cli-table');
const chalk = require('chalk');

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

  testInputsLowRange = [
    {inputSize: 100, inputRange: 500},
    {inputSize: 500, inputRange: 500},
    {inputSize: 1000, inputRange: 500},
    {inputSize: 10000, inputRange: 500},
    {inputSize: 50000, inputRange: 500},
    // {inputSize: 100000, inputRange: 500},
  ];

  progressBar = new ProgressBar();

  elapsedTime(note) {
    var elapsed = process.hrtime(this.start)[1] / 1000000; // divide by a million to get nano to milli
    const log = process.hrtime(this.start)[0] + "s " + elapsed.toFixed(this.precision) + "ms";
    const time = (process.hrtime(this.start)[0] * 1000) + elapsed.toFixed(this.precision); // print message + time
    this.start = process.hrtime(); // reset the timer
    return {log, time: parseFloat(time)};
  }

  getStats(cb: Function, name = cb.name, lowRange: boolean = false) {
    const inputs = lowRange ? this.testInputsLowRange : this.testInputs;
    const bar = this.progressBar.create(name);
    bar.start(inputs.length);
    this.start = process.hrtime();
    let data = {
      sort: {},
      array_generation: {'Array Generation': []},
    };
    data.sort[name] = [];
    inputs.forEach((input, i) => {
      const array = randomArray(input.inputSize, input.inputRange);
      let { log } = this.elapsedTime('Generating Array');
      data.array_generation['Array Generation'].push(log);
      const sortedResult = cb(array);
      let execTime = this.elapsedTime(`${name} Sort Execution Time`);
      data.sort[name].push(execTime.log);
      if (i === inputs.length - 1) {
        data.sort[name].push(sortedResult.comparisons);
        data.sort[name].push(sortedResult.swaps);
      }
      this.progressBar.increment(1);
    });
    bar.stop();
    return data;
  }


  getAllSortStats(lowRange: boolean) {
    bgMagenta(`####################### ${lowRange ? 'Low Range Inputs' : 'High Range Inputs'} #######################`);
    const bubbleStats = this.getStats(bubble_sort, bubbleSort, lowRange);
    const insertionStats = this.getStats(insertion_sort, insertionSort, lowRange);
    const selectionStats = this.getStats(selection_sort, selectionSort, lowRange);
    const quickStats = this.getStats(quick_sort, quickSort, lowRange);
    const iMergeStats = this.getStats(i_merge_sort, iMergeSort, lowRange);
    const rMergeStats = this.getStats(r_merge_sort, rMergeSort, lowRange);
    const countStats = this.getStats(count_sort, countSort, lowRange);
    const bucketStats = this.getStats(bucket_sort, bucketSort, lowRange);
    let aggregate = [
      bubbleStats,
      insertionStats,
      selectionStats,
      quickStats,
      iMergeStats,
      rMergeStats,
      countStats,
      bucketStats
    ];
    const inputs = lowRange ? this.testInputsLowRange : this.testInputs;
    this.printStats(aggregate, inputs);
  }

  printStats(data, inputs) {
    const tableHead = ['Input Size / Input Range'].concat(inputs.map(input => input.inputSize.toString().concat(' / '+input.inputRange.toString()))).concat(['Comparisons', 'Swaps']);
    const table = new Table({ head: tableHead });
    Array.isArray(data) ? data.forEach(row => table.push(row.sort)) : table.push(data);
    console.log(table.toString());
  }

  // findMinMax(aggregate) {
  //   const keys = Object.keys(aggregate[0].minMax);
  //   for(let k=0; k < keys.length; k++) {
  //     let min = Infinity;
  //     let max = -Infinity;
  //     let minSort = null, maxSort = null;
  //     let minIndex = -1, maxIndex = -1;
  //     aggregate.forEach((sortStats, index) => {
  //       if (sortStats.minMax[keys[k]] < min) {
  //         min = sortStats.minMax[keys[k]];
  //         minSort = sortStats;
  //         minIndex = index;
  //       }
  //       if (sortStats.minMax[keys[k]] > max) {
  //         max = sortStats.minMax[keys[k]];
  //         maxSort = sortStats;
  //         maxIndex = index;
  //       }
  //     });
  //     minSort.minMax[keys[k]] = chalk.bgGreen(minSort.minMax[keys[k]].toString());
  //     maxSort.minMax[keys[k]] = chalk.bgRed(maxSort.minMax[keys[k]].toString());
  //   }

  //   // aggregate.forEach(sortStats => {
  //   //   sortStats.sort[Object.keys(sortStats.sort)[0]] = Object.values(sortStats.minMax)
  //   // });
  //   return aggregate;
  // }
}