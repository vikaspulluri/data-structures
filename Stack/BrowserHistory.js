class BrowserHistory {
  stack = [];
  index = -1;
  homepage;
  constructor(homepage) {
      this.homepage = homepage;
  }

  visit(url) {
    this.index++;
    this.stack[this.index] = url;
    this.stack.length = this.index + 1;
  }

  back(steps) {
      const moveTo = this.index - steps;
      if (moveTo < 0) {
          this.index = -1;
          return this.homepage;
      }
      this.index = moveTo;
      return this.stack[this.index];
  }

  forward(steps) {
      const moveTo = this.index + steps;
      this.index = moveTo < this.stack.length ? moveTo : this.stack.length - 1;
      return this.stack[this.index] || this.homepage;
  }
}

const bh = new BrowserHistory('leetcode.com');
bh.visit('google.com');
bh.visit('facebook.com');
bh.visit('youtube.com');
console.log(bh.stack, bh.index)
console.log(bh.back(1))