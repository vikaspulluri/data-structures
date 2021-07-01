import { bgRed } from '../log';

export class ArrayADT {
  private size: number;
  private array;
  private length: number = 0;
  constructor(size: number) {
    this.size = size;
    this.array = new Array(this.size);
  }

  display() {
    // this.array.forEach(val => console.log(val));
    console.log(this.array);
  }

  append(x) {
    // this.array.push(x);
    this.array[this.length] = x;
    this.length++;
  }

  insert(index: number, value) {
    if (index > this.length || index >= this.size) {
      bgRed(`Invalid index! ${index}`);
      return;
    }
    for (let i = this.length; i > index; i--) {
      this.array[i] = this.array[i-1];
    }
    this.array[index] = value;
    this.length++;
  }

  delete(index: number) {
    if (index >= this.size || this.array[index] === undefined) {
      bgRed(`Invalid index! ${index}`);
      return;
    }
    for (let i = index; i < this.length; i++) {
      this.array[i] = this.array[i+1];
    }
    this.array[this.length] = undefined;
    this.length--;
  }

  search(key) {
    for(let i = 0; i < this.length; i++) {
      if (this.array[i] === key) return i;
    }
    return -1;
  }

  binarySearch(key) {
    let l = 0, h = this.length;
    while (l < h) {
      let mid = Math.floor((l + h )/ 2);
      if (this.array[mid] === key) {
        return mid;
      } else if (key < this.array[mid]) {
        h = mid - 1;
      } else if (key > this.array[mid]) {
        l = mid + 1;
      }
    }
    return -1;
  }

  rbinarySearch(key, l = 0, h = this.length) {
    if (h >= l) {
      let mid = Math.floor((l + h) / 2);
      if (this.array[mid] === key) {
        return mid;
      } else if (key < this.array[mid]) {
        return this.rbinarySearch(key, l, mid - 1);
      } else if (key > this.array[mid]) {
        return this.rbinarySearch(key, mid + 1, h);
      }
    }
    return -1;
  }

  reverse() {
    let i = 0, j = this.length - 1;
    while (i < j) {
      let tmp = this.array[i];
      this.array[i] = this.array[j];
      this.array[j] = tmp;
      i++;
      j--;
    }
  }

  leftShift() {
    for (let i = 1; i < this.length; i++) {
      this.array[i-1] = this.array[i];
    }
    this.array[--this.length] = undefined;
  }

}
