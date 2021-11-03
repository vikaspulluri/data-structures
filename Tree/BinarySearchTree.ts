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
}