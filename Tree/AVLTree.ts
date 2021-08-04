import { BinarySearchTree } from "./BinarySearchTree";
import { Node } from './Node';

export class BalancedBinarySearchTree extends BinarySearchTree {

  create(arr: number[]) {
    this.root = new Node(arr[0]);
    for(let i=1; i<arr.length;i++) {
      this.rinsert(this.root, arr[i]);
    }
  }

  rinsert(node = this.root, key) {
    if (node === null) {
      let tmp = new Node(key);
      tmp.height = 1;
      return tmp;
    }
    if (key < node.data) node.left = this.rinsert(node.left, key);
    if (key > node.data) node.right = this.rinsert(node.right, key);
    node.height = this.nodeHeight(node);
    const nodeBf = this.balanceFactor(node);
    if (nodeBf === 2 && this.balanceFactor(node.left) === 1) {
      // LL rotation
      return this.llRotation(node);
    } else if (nodeBf === 2 && this.balanceFactor(node.left) === -1) {
      // LR rotation
      return this.lrRotation(node);
    } else if (nodeBf === -2 && this.balanceFactor(node.right) === -1) {
      // RR rotation
      return this.rrRotation(node);
    } else if (nodeBf === -2 && this.balanceFactor(node.right) === 1) {
      // RL rotation
      return this.rlRotation(node);
    }
    return node;
  }

  nodeHeight(node: Node) {
    const leftSubtreeHeight = node && node.left ? node.left.height : 0;
    const rightSubtreeHeight = node && node.right ? node.right.height : 0;
    return leftSubtreeHeight > rightSubtreeHeight ? leftSubtreeHeight+1 : rightSubtreeHeight+1;
  }

  balanceFactor(node: Node) {
    const leftSubtreeHeight = node && node.left ? node.left.height : 0;
    const rightSubtreeHeight = node && node.right ? node.right.height : 0;
    return leftSubtreeHeight - rightSubtreeHeight;
  }

  llRotation(p: Node) {
    const pl = p.left;
    const plr = pl.right;
    pl.right = p;
    p.left = plr;
    p.height = this.nodeHeight(p);
    pl.height = this.nodeHeight(pl);
    if(this.root === p) this.root = pl;
    return pl;
  }

  rrRotation(p: Node) {
    const pr = p.right;
    const prl = pr.left;
    p.right = prl;
    pr.left = p;
    p.height = this.nodeHeight(p);
    pr.height = this.nodeHeight(pr);
    if (this.root === p) this.root = pr;
    return pr;
  }

  lrRotation(p: Node) {
    const pl = p.left;
    const plr = pl.right;

    pl.right = plr.left;
    p.left = plr.right;

    plr.left = pl;
    plr.right = p;

    pl.height = this.nodeHeight(pl);
    plr.height = this.nodeHeight(plr);
    p.height = this.nodeHeight(p);
    if (this.root === p) this.root = plr;
    return plr;
  }

  rlRotation(p: Node) {
    const pr = p.right;
    const prl = pr.left;
    p.right = prl.left;
    prl.left = p;
    pr.left = prl.right;
    prl.right = pr;
    p.height = this.nodeHeight(p);
    pr.height = this.nodeHeight(pr);
    prl.height = this.nodeHeight(prl);
    if (this.root === p) this.root = prl;
    return prl;
  }
}