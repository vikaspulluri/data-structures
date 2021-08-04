import { blue, green } from "../log";
import { randomArray } from "../Sorting/util";
import { BalancedBinarySearchTree } from "./AVLTree";
import { BinarySearchTree } from "./BinarySearchTree";
import { BinaryTree } from "./BinaryTree";

export class TreeSimulator {
  binaryTree() {
    const binaryTree = new BinaryTree();

    binaryTree.create();
    binaryTree.preorder();
    binaryTree.levelorder();
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
  }

  bbst() {
    const bbst = new BalancedBinarySearchTree();
    const array = randomArray(64, 500);
    bbst.create(array);
    console.log(array);
    console.log('root: ', bbst.root.data);
    console.log('height of tree: ', bbst.height());
  }
}

const tree = new TreeSimulator();
// tree.bbst();
const array = randomArray(128, 10000);
const bst = new BinarySearchTree();
const bbst = new BalancedBinarySearchTree();
bst.create(array);
bbst.create(array);
blue(`bst vs bbst height: , ${bst.height()}, ${bbst.height()}`);
green(`root of bst vs bbst: ${bst.root.data} vs ${bbst.root.data}`);




