class DoubleNode {
  prev: DoubleNode = null;
  next: DoubleNode = null;
  data: string;
  constructor(data: string) {
      this.data = data;
  }
}
class BrowserHistory {
  root: DoubleNode;
  currentNode: DoubleNode;
  constructor(homepage: string) {
      this.root = new DoubleNode(homepage);
      this.currentNode = this.root;
  }

  visit(url: string): void {
      const newNode = new DoubleNode(url);
      this.currentNode.next = newNode;
      newNode.prev = this.currentNode;
      this.currentNode = newNode; 
  }

  back(steps: number): string {
      for (let i=0;i<steps;i++) {
          if (this.currentNode.prev) {
              this.currentNode = this.currentNode.prev;
          }
      }
      return this.currentNode.data;
  }

  forward(steps: number): string {
      for (let i=0;i<steps;i++) {
          if (this.currentNode.next) {
              this.currentNode = this.currentNode.next;
          }
      }
      return this.currentNode.data;
  }
}

class BrowserHistoryWithStack {
  stack = [];
  index = -1;
  homepage: string;
  constructor(homepage: string) {
      this.homepage = homepage;
  }

  visit(url: string): void {
      this.index++;
      this.stack[this.index] = url;
      this.stack.length = this.index + 1;
  }

  back(steps: number): string {
      const moveTo = this.index - steps;
      if (moveTo < 0) {
          this.index = -1;
          return this.homepage;
      }
      this.index = moveTo;
      return this.stack[this.index];
  }

  forward(steps: number): string {
      const moveTo = this.index + steps;
      this.index = moveTo < this.stack.length ? moveTo : this.stack.length - 1;
      return this.stack[this.index] || this.homepage;
  }
}


const bh = new BrowserHistory('zav.com');
bh.visit('kni.com');
bh.back(7);
bh.back(7);
bh.forward(5);
bh.forward(1);
bh.visit('pwr.com');
bh.visit('mo.com');
bh.back(9);

