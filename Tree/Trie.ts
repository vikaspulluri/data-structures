const ALPHABET_SIZE = 26;

class TrieNode {
  public children: Map<string, TrieNode>;
  public isEndOfWord: boolean;
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

export class Trie {
  private root: TrieNode = new TrieNode();

  insert(word: string) {
    let current: TrieNode = this.root;
    for(let c of word) {
      let node: TrieNode = current.children.get(c);
      if (!node) {
        node = new TrieNode();
        current.children.set(c, node);
      }
      current = node;
    }
    current.isEndOfWord = true;
  }

  search(word: string) {
    let current = this.root;
    for (let c of word) {
      let node = current.children.get(c);
      if (!node) {
        return false;
      }
      current = node;
    }
    return current.isEndOfWord;
  }

  delete(word: string) {
    this.shouldDelete(this.root, word, 0);
  }

  shouldDelete(current: TrieNode, word: string, index: number): boolean {
    if (index === word.length) {
      if (!current.isEndOfWord) return false;
      current.isEndOfWord = false;
      return current.children.size === 0;
    }
    let c = word[index];
    let node = current.children.get(c);
    if (node === null) return false;

    let shouldDeleteCurrentNode = this.shouldDelete(node, word, index + 1);

    if (shouldDeleteCurrentNode) {
      current.children.delete(c);
      return current.children.size === 0;
    }
    return false;
  }

  prefixSearch(prefix: string): string[] {
    let current = this.root;
    const results = [];
    for (let c of prefix) {
      let node = current.children.get(c);
      if (node) {
        current = node;
      } else {
        return results;
      }
    }
    if (!current) return results;
    if (current.isEndOfWord) results.push(prefix);

    let d = [];
    d.push(current.children, prefix);
    while(d.length > 0) {
      let cur = d.shift();
      let pre = d.shift();
      for (let key of cur.keys()) {
        let tmp = cur.get(key);
        if (tmp.isEndOfWord) {
          results.push(pre + key);
        }
        d.push(tmp.children, pre + key);
      }
    }
    return results;
  }

  print() {
    console.log(this.root);
  }
}