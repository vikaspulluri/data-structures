import { randomArray } from "../Sorting/util";
import { BinarySearchTree } from "./BinarySearchTree";
import { BinaryTree } from "./BinaryTree";

const binaryTree = new BinaryTree();

// binaryTree.create();
// binaryTree.preorder();
// binaryTree.levelorder();

const bst = new BinarySearchTree();
const array = randomArray(10,50);
let key = array[4];
console.log(array, key);
bst.create(array);
bst.display();
bst.delete(bst.root, key);
console.log('after deleting: ', key);
bst.display();