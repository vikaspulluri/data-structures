import { difference, intersection, merge, union, max_min, findMissingElements, findMissingElementsSpace, duplicate, sumOfPair, sumOfPairSorted } from "./array-operations";
import { bgBlue, yellow, green, cyan, magenta, bgYellow, bgGreen, blue, bgMagenta, bgCyan, bgRed } from "../log";

export class ArrayOperations {
  private a = [1,3,6,8,11];
  private b = [2,4,5,7,8,9,10,11,13,14];
  private c = [7,5,15,19,4];
  private d = [1,2,4,5,6,9,10];
  private e = [5,2,1,4,6,4,7,5,4,2];
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

    bgYellow('Min and Max:');
    yellow(max_min(this.b));

    bgGreen('Missing Elements:');
    blue(findMissingElements(this.d));
    cyan(findMissingElementsSpace(this.d));

    bgMagenta('Duplicate Elements:');
    green(duplicate(this.e));

    bgRed('Sum of Pair:');
    yellow(sumOfPair(13, this.b));
    blue(sumOfPairSorted(13, this.b));
  }
}

const op = new ArrayOperations();
op.initAll();

