import { difference, intersection, merge, union, max_min, findMissingElements, findMissingElementsSpace, duplicates, sumOfPair, sumOfPairSorted, deleteDuplicatesSortedInPlace, duplicatesInPlace } from "./array-operations";
import { bgBlue, yellow, green, cyan, magenta, bgYellow, bgGreen, blue, bgMagenta, bgCyan, bgRed } from "../log";
import { pairs, removeDuplicates, threeSum, dups, insertPosition, rotateArray } from "./challenges";
import { removeDuplicatesInPlace } from "./remove-duplicates-inplace";
import { maxProfitWithSingleTransaction } from "./buy-sell-stock";
import * as kthElement from "./kth-smallest-element";

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
  private e = [1,3,4,5,7,6];
  threeSum() {
    bgBlue('ThreeSum:');
    cyan(threeSum(this.b));
  }

  removeDuplicates() {
    bgMagenta('Remove Duplicates:');
    green(removeDuplicates(this.d));
  }

  pairs() {
    bgMagenta('Pairs:')
    green(pairs(2, this.e));
  }
  dups(arr) {
    green(dups(arr));
  }

  insertPos(arr, t) {
    green(insertPosition(arr, t));
  }
  rotate(arr, k) {
    rotateArray(arr, k);
  }
}

const a = new ArrayOperations();
// a.initAll();

const c = new Challenges();
// c.threeSum();
// c.removeDuplicates();
// c.pairs();
let arr = [13, 9, 25,1,1,0,22,13,22,20,3,8,11,25,10,3,15,11,19,20,2,4,25,14,23,14];
// c.dups(arr);
let aa = [1,3,4,6];
// c.insertPos(aa, 7);
// c.rotate([1,2,3,4,5,6,7], 3);

// green(removeDuplicatesInPlace([1,1,2]))
// blue(maxProfitWithSingleTransaction([1,3,7,8]))

kthElement.run()
