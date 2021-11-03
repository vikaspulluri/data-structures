export class Node {
  data;
  left: Node;
  right: Node;
  height: number;
  hd?: number;
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
