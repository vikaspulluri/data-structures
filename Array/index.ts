import { difference, intersection, merge, union } from "./array-operations";
import { bgBlue, yellow, green, cyan, magenta } from "../log";

export class ArrayOperations {
  private a = [1,3,6,8,11];
  private b = [2,4,5,7,8,9,10,11,13,14];
  private c = [7,5,15,19,4];
  constructor() {}

  initAll() {
    bgBlue('Merging:');
    yellow(merge(this.a,this.b));

    bgBlue('Union:');
    green(union(this.a,this.b));

    bgBlue('Intersection:');
    magenta(intersection(this.b,this.c));

    bgBlue('Difference:');
    cyan(difference(this.b, this.c));
  }
}

const op = new ArrayOperations();
op.initAll();
