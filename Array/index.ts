import { difference, intersection, merge, union, max_min, findMissingElements, findMissingElementsSpace, duplicates, sumOfPair, sumOfPairSorted, deleteDuplicatesSortedInPlace, duplicatesInPlace } from "./array-operations";
import { bgBlue, yellow, green, cyan, magenta, bgYellow, bgGreen, blue, bgMagenta, bgCyan, bgRed } from "../log";
import { removeDuplicates, threeSum } from "./challenges";

export class ArrayOperations {
  private a = [1,3,6,8,11];
  private b = [2,4,5,7,8,9,10,11,13,14];
  private c = [7,5,15,19,4];
  private d = [1,2,4,5,6,9,10];
  private e = [5,2,1,4,6,4,7,5,4,2];
  private f = [0,0,1,1,1,2,2,3,3,4];
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
    green(duplicates(this.e));
    blue(duplicatesInPlace(this.e));

    bgRed('Sum of Pair:');
    yellow(sumOfPair(13, this.b));
    blue(sumOfPairSorted(13, this.b));

    bgBlue('Remove Duplicates:');
    cyan(deleteDuplicatesSortedInPlace(this.f));
  }
}

export class Challenges {
  private a = [-1,1,0,-1,2,-4];
  private b = [-2,0,1,1,2];
  private c = [1,1,2,3,3,3,4,5];
  private d = [1,1,1,2,2,3];
  threeSum() {
    bgBlue('ThreeSum:');
    cyan(threeSum(this.b));
  }

  removeDuplicates() {
    bgMagenta('Remove Duplicates:');
    green(removeDuplicates(this.d));
  }
}

const a = new ArrayOperations();
// a.initAll();

const c = new Challenges();
// c.threeSum();
c.removeDuplicates();