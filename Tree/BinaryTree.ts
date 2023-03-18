import { Stack } from "../Stack/Stack";
import { blue, green, magenta, yellow } from "../log";
import { Queue } from "../Queue/Queue";
import { Node } from "./Node";

const rliSync = require('readline-sync');

export class BinaryTree {

  root: Node;
  maxLevel = 0;

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

  leftView(node = this.root, level = 1) {
    if (!node) return;

    if (this.maxLevel < level) { // if it is the first node of the level
      console.log(node.data);
      this.maxLevel = level;
    }
    this.leftView(node.left, level + 1);
    this.leftView(node.right, level + 1);
  }

  leftViewUsingQueue(node = this.root) {
    if (!node) return;
    const q = new Queue();
    q.enqueue(node);

    while(!q.isEmpty()) {
      const n = q.size();
      for (let i = 1; i <= n; i++) {
        const tmp = q.dequeue();
        if (i === 1) {
          console.log(tmp.data);
        }
        if (tmp.left) q.enqueue(tmp.left);
        if (tmp.right) q.enqueue(tmp.right);
      }
    }
  }

  topView(node = this.root) {
    let q = new Queue();
    if (!node.hd) node.hd = 0;
    let map = new Map();
    let res = [];
    q.enqueue(node);
    if (!map.has(node.hd)) map.set(node.hd, node.data);
    while(!q.isEmpty()) {
      const left = node.left;
      const right = node.right;
      if (node.left) {
        left.hd = node.hd - 1;
        if (!map.has(left.hd)) map.set(left.hd, left.data);
        q.enqueue(left);
      }
      if (right) {
        right.hd = node.hd + 1;
        if (!map.has(right.hd)) map.set(right.hd, right.data);
        q.enqueue(right);
      }
      node = q.dequeue();
    }
    let vals = Array.from(map);
    vals.sort((a,b) => a[0] - b[0]);
    for (let [key, value] of vals) {
        res.push(value);
    }
    console.log(res);
  }

  doesAllLeafsOnSameLevel(node = this.root) {
    const level = 0;
    let leafLevel = 0;

    function checkUtil(node, level) {
      if (!node) return true;
      if (!node.left && !node.right) { // leaf node
        if (leafLevel === 0) {
          leafLevel = level;
          return true;
        }
        return level === leafLevel;
      }
      return checkUtil(node.left, level + 1) && checkUtil(node.right, level + 1);
    }
    return checkUtil(node, level);
  }

  mirror(node) {
    // your code here
    if (node) {
      let right = node.right;
      let left = node.left;
      node.left = right;
      node.right = left;
      this.mirror(node.left);
      this.mirror(node.right);
    }
    return null;
  }

  sumRootToLeaf(root) {
    return this.getSumHelper(root, 0, 0);
  }

  getSumHelper(node: Node | null, sum, path) {
    path = (path * 10) + Number(node.data);
    if (!node.left && !node.right) {
        sum = sum + path;
    } else {
        if (node.left) {
            sum = this.getSumHelper(node.left, sum, path);
        }
        if (node.right) {
            sum = this.getSumHelper(node.right, sum, path)
        }
    }
    return sum;
  }

  printRootToLeafPaths() {
    const paths = [];
    this.pathHelper(this.root, [], paths);
    console.log({paths})
  }

  pathHelper(node: Node | null, path, paths) {
    path.push(node.data);
    if (!node.left && !node.right) {
      paths.push(path.slice());
    } else {
      if (node.left) {
        path = this.pathHelper(node.left, path, paths);
      }
      if (node.right) {
        path = this.pathHelper(node.right, path, paths);
      }
    }
    path.pop();
    return path;
  }

  isCompleteTree(root: Node | null): boolean {
    const q = [root];
    let isGapFound = false;
    while(q.length > 0) {
        for (let i=0;i<q.length;i++) {
            let node = q.shift();
            if (node === null) {
                isGapFound = true;
            } else {
                if (isGapFound) return false;
                q.push(node.left, node.right);
            }
        }
    }
    return true;
  };

}
