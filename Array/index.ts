import { difference, intersection, merge, union } from "./array-operations";
import * as chalk from 'chalk';

export class ArrayOperations {
  private a = [1,3,6,8,11];
  private b = [2,4,5,7,8,9,10,11,13,14];
  private c = [7,5,15,19,4];
  constructor() {}

  initAll() {
    console.log(chalk.bgBlue('Merging:'));
    console.log(chalk.magenta(merge(this.a,this.b)));

    console.log(chalk.bgBlue('Union:'));
    console.log(chalk.green(union(this.a,this.b)));

    console.log(chalk.bgBlue('Intersection:'));
    console.log(chalk.yellow(intersection(this.b,this.c)));

    console.log(chalk.bgBlue('Difference:'));
    console.log(chalk.cyan(difference(this.b, this.c)));
  }
}

const op = new ArrayOperations();
op.initAll();
