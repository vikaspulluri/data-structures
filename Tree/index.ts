import { blue, green } from "../log";
import { randomArray } from "../Sorting/util";
import { BalancedBinarySearchTree } from "./AVLTree";
import { BinarySearchTree } from "./BinarySearchTree";
import { BinaryTree } from "./BinaryTree";
import { Heap } from "./Heap";
import { Trie } from "./Trie";

export class TreeSimulator {
  binaryTree() {
    const binaryTree = new BinaryTree();

    binaryTree.create();
    // binaryTree.preorder();
    // binaryTree.levelorder();
    console.log(binaryTree.height());
    // console.log('left view using recursion: ');
    // binaryTree.leftView();
    // console.log('left view using queues: ')
    // binaryTree.leftViewUsingQueue();
    // console.log('top view:');
    // binaryTree.topView();
    // console.log(binaryTree.doesAllLeafsOnSameLevel());
    // let sum = binaryTree.sumRootToLeaf(binaryTree.root);
    // console.log({sum});
    binaryTree.printRootToLeafPaths();
  }

  bst() {
    const bst = new BinarySearchTree();
    const array = randomArray(64,500);
    let key = array[4];
    console.log(array, key);
    bst.create(array);
    bst.display();
    bst.delete(bst.root, key);
    console.log('after deleting: ', key);
    bst.display();
    console.log('is bst: ', bst.isBst2(bst.root));
  }

  bbst() {
    const bbst = new BalancedBinarySearchTree();
    const array = randomArray(64, 500);
    bbst.create(array);
    console.log(array);
    console.log('root: ', bbst.root.data);
    console.log('height of tree: ', bbst.height());
  }

  heap() {
    const heap = new Heap();
    // const arr = randomArray(10);
    const arr = [1,2,3,4,5,6,7,8,9];
    heap.create(arr);
    heap.display();
    heap.heapify(arr);
    // heap.sort();
    heap.display();
  }
}

const tree = new TreeSimulator();
// tree.bbst();
// const array = randomArray(128, 10000);
// const bst = new BinarySearchTree();
// const bbst = new BalancedBinarySearchTree();
// bst.create(array);
// bbst.create(array);
// blue(`bst vs bbst height: , ${bst.height()}, ${bbst.height()}`);
// green(`root of bst vs bbst: ${bst.root.data} vs ${bbst.root.data}`);

// tree.heap();
// tree.bst();
tree.binaryTree();

// const trie = new Trie();

// trie.insert('abc');
// trie.insert('ant');
// trie.insert('any');
// trie.insert('animal');
// trie.insert('and');
// trie.insert('ball');

// console.log(trie.prefixSearch('an'));