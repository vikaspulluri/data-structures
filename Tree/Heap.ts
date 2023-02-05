import { blue } from "../log";
import { Node } from "./Node";

export class Heap {

  root: Node;
  heapArr = [];
  size = this.heapArr.length;

  create(arr: number[]) {
    arr.forEach(val => this.insert(val));
  }

  insert(n: number) {
    let i = this.size;
    let tmp = n;
    let parent = this.heapArr[Math.floor(i/2)];
    while(i>=1 && tmp > parent) {
      this.heapArr[i] = parent;
      i = Math.floor(i/2);
    }
    this.heapArr[i] = tmp;
    this.size++;
  }

  delete() {
    let x = this.heapArr[0];
    this.heapArr[0] = this.heapArr[this.size-1];
    let i=0, j=(2*i)+1;
    while(j<this.size-1) {
      if (this.heapArr[j+1] > this.heapArr[j]) j = j + 1;
      if (this.heapArr[i] < this.heapArr[j]) {
        [this.heapArr[i], this.heapArr[j]] = [this.heapArr[j], this.heapArr[i]];
        i = j;
        j = (2 * j) + 1;
      } else {
        break;
      }
    }
    this.heapArr[--this.size] = x; // appending the deleted element to last (helpful in heap sort)
  }

  sort() {
    for (let i = 0; i < this.heapArr.length; i++) {
      this.delete();
    }
  }

  heapify(arr: number[]) {
    const n = arr.length;
    const leafCount = Math.floor((n + 1)/2);
    const lastLeafParent = Math.floor(n/2) - 1;

    for (let i = lastLeafParent; i>= 0; i--) {
      let j = 2 * i + 1; // left child of current i
      while (j < n-1) {
        if (arr[j] < arr[j+1]) { // compare left and right child of current i
          j++;
        }
        if (arr[i] < arr[j]) { // compare parent and largest child
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i = j;
          j = 2 * i + 1;
        } else {
          break;
        }
      }
    }
    this.heapArr = arr;
    this.size = this.heapArr.length;
  }

  display() {
    blue(this.heapArr);
  }
}

