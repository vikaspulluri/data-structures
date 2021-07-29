import { Stack } from "../Stack/Stack";
import { blue, green, magenta, yellow } from "../log";
import { Queue } from "../Queue/Queue";
import { Node } from "./Node";

const rliSync = require('readline-sync');

export class BinaryTree {

  root: Node;

  create() {
    const q = new Queue();
    const rootVal = rliSync.question('enter root node => ');
    this.root = new Node(rootVal);
    q.enqueue(this.root);
    this.createChildren(q);
  }

  createChildren(q) {
    if (q.isEmpty()) {
      console.log("\nYour binary tree is ready!!!");
      return;
    }
    let p = q.dequeue();
    const lchild = rliSync.question(`enter left child for ${p.data} => `);
    if (+lchild !== -1) {
      let tmp = new Node(lchild);
      p.left = tmp;
      q.enqueue(tmp);
    }      
    const rchild = rliSync.question(`enter right child for ${p.data} => `);
    if (+rchild !== -1) {
      let tmp = new Node(rchild);
      p.right = tmp;
      q.enqueue(tmp);
    }
    this.createChildren(q);
  }

  display() {
    console.log('preorder: ', this.preorder());
    console.log('inorder: ', this.inorder());
    console.log('postorder: ', this.postorder());
  }

  preorder(node = this.root, log: Function = yellow) {
    if (node) {
      log(node.data);
      this.preorder(node.left, blue);
      this.preorder(node.right, green);
    }
  }

  inorder(node = this.root, log: Function = yellow) {
    if (node) {
      this.inorder(node.left, blue);
      log(node.data);
      this.inorder(node.right, green);
    }
  }

  postorder(node = this.root, log: Function = yellow) {
    if (node) {
      this.postorder(node.left, blue);
      this.postorder(node.right, green);
      log(node.data);
    }
  }

  ipreorder(node = this.root) {
    const stack = new Stack();
    while(node || !stack.isEmpty()) {
      if (node) {
        blue(node.data);
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        node = node.right;
      }
    }
  }

  iinorder(node = this.root) {
    const stack = new Stack();
    while(node || !stack.isEmpty()) {
      if (node) {
        stack.push(node);
        node = node.left;
      } else {
        node = stack.pop();
        green(node.data);
        node = node.right;
      }
    }
  }

  levelorder() {
    const q = new Queue();
    q.enqueue(this.root);
    while(!q.isEmpty()) {
      let node = q.dequeue();
      if (node) {
        yellow(node.data);
        q.enqueue(node.left);
        q.enqueue(node.right);
      }
    }
  }

  count(node = this.root) {
    let x,y;
    if (node) {
      x = this.count(node.left);
      y = this.count(node.right);
      return x + y + 1;
      /**
       * count nodes which are having both children 
       * return (node.left && node.right) ? x+y+1 : x+y;
       * sum of nodes
       * return x+y+node.data;
       * leaf nodes count
       * return (!node.left && !node.right) ? x+y+1 : x+y
       * nodes with degree 1 or 2
       * return (node.left || node.right) ? x+y+1 : x+y
       * nodes with degree 1
       * return (node.left ^ node.right) ? x+y+1 : x+y; // exclusive OR
      */
    }
    return 0;
  }

  height(node = this.root) {
    let x = 0, y = 0;
    if (!node) return 0;
    x = this.height(node.left);
    y = this.height(node.right);
    return x>y ? x+1 : y+1;
  }
}