import { Stack } from "../Stack/Stack";
import { magenta } from "../log";
import { Node } from "./Node";

export class BinarySearchTree {
  root: Node;

  create(arr: number[]) {
    this.root = new Node(arr[0]);
    for(let i=1; i<arr.length;i++) {
      this.insert(arr[i]);
      // this.rinsert(this.root, arr[i]);
    }
  }

  insert(value) {
    let tmp = this.root;
    let prev = tmp;
    const node = new Node(value);
    if (tmp === null) {
      this.root = node;
    }
    while(tmp) {
      prev = tmp;
      if (value < tmp.data) {
        tmp = tmp.left;
      } else if (value > tmp.data) {
        tmp = tmp.right;
      } else {
        return;
      }
    }
    if (value < prev.data) {
      prev.left = node;
    } else {
      prev.right = node;
    }
  }

  search(key) {
    let tmp = this.root;
    while(tmp) {
      if (key < tmp.data) {
        tmp = tmp.left;
      } else if (key > tmp.data) {
        tmp = tmp.right;
      } else {
        return tmp;
      }
    }
    return null;
  }

  rsearch(node = this.root, x) {
    // your code here
    if (!node) return false;
    if (node) {
        if (node.data == x) return true;
        if (node.data < x) return this.rsearch(node.right,x);
        if (node.data > x) return this.rsearch(node.left,x);
    }
  }

  rinsert(node = this.root, key) {
    if (node === null) {
      let tmp = new Node(key);
      return tmp;
    }
    if (key < node.data) node.left = this.rinsert(node.left, key);
    if (key > node.data) node.right = this.rinsert(node.right, key);
    return node;
  }

  delete(node = this.root, key) {
    if (node === null) return null;
    if (!node.left && !node.right) {
      if (node === this.root) this.root = null;
      return null;
    }
    if (key < node.data) {
      node = this.delete(node.left, key);
    } else if (key > node.data) {
      node = this.delete(node.right, key);
    } else { // equal
      if (this.height(node.left) > this.height(node.right)) {
        let inPredecessor = this.inorderPredecessor(node.left);
        node.data = inPredecessor.data;
        node.left = this.delete(node.left, inPredecessor.data);
      } else {
        let inSuccessor = this.inorderSuccessor(node.right);
        node.data = inSuccessor.data;
        node.right = this.delete(node.right, inSuccessor.data);
      }
    }

    return node;
  }

  height(node = this.root) {
    if (node === null) return 0;
    let x = this.height(node.left);
    let y = this.height(node.right);
    return x > y ? x+1 : y+1;
  }

  inorderPredecessor(node = this.root) {
    while(node && node.right) node = node.right;
    return node;
  }

  inorderSuccessor(node = this.root) {
    while(node && node.left) node = node.left;
    return node;
  }

  inorder(node = this.root) {
    if (node) {
      this.inorder(node.left);
      magenta(node.data);
      this.inorder(node.right);
    }
  }

  display() {
    console.log('############### inorder traversal ###############');
    this.inorder();
  }

  /**
   * Time complexity O(n)
   * Auxiliary space O(1)
   * @param node 
   * @returns 
   */
  isBst(node = this.root, min = Number.MIN_VALUE, max = Number.MAX_VALUE) {
    if (node === null) return true; // empty tree is BST

    if (node.data < min || node.data > max) return false;

    return this.isBst(node.left, min, node.data - 1) && this.isBst(node.right, node.data + 1, max);

  }

  /**
   * inorder traversal of tree gives sorted list, check whether it is sorted or not
   * Time complexity O(n)
   * Auxiliary space O(1)
   */
  isBst2(node = this.root, prev = null) {

    if (node !== null) {
      if (!this.isBst2(node.left, prev)) return false;

      if (prev !== null && node.data <= prev.data) return false;

      return this.isBst2(node.right, node);
    }
    return true;
  }

  sortedArrayToBST_recursive(nums: number[]) {
    if (nums.length === 0) return null;
    return this.sortedArrayToBST_rHelper(nums, 0, nums.length - 1);
  }

  sortedArrayToBST_rHelper(nums: number[], start: number, end: number) {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const node = new Node(mid);
    node.left = this.sortedArrayToBST_rHelper(nums, start, mid-1);
    node.right = this.sortedArrayToBST_rHelper(nums, mid+1, end);
    return node;
  }

  sortedArrayToBST_Iterative(nums: number[]) {
    const n = nums.length;
    if (n === 0) return null;
    const head = new Node(0);

    const nodeStack = new Stack();
    const leftIdxStack = new Stack();
    const rightIdxStack = new Stack();

    while(!nodeStack.isEmpty()) {
      const node = nodeStack.pop();
      const left = leftIdxStack.pop();
      const right = rightIdxStack.pop();

      let mid = Math.floor((left + right) / 2);
      node.data = nums[mid];

      if (left <= mid-1) {
        node.left = new Node(0);
        nodeStack.push(node.left);
        leftIdxStack.push(left);
        rightIdxStack.push(mid-1);
      }
      if (right >= mid+1) {
        node.right = new Node(0);
        nodeStack.push(node.right);
        leftIdxStack.push(mid+1);
        rightIdxStack.push(right);
      }
    }
  }
}
