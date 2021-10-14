import PrimsMST from './prims-min-spanning-tree';
import BFS from './bfs';
import DFS from './dfs';

const I = Infinity;

class Graph {
  private cost = [
    [I, I, I, I, I, I, I, I],
    [I, I, 25, I, I, I, 5, I],
    [I, 25, I, 12, I, I, I, 10],
    [I, I, 12, I, 8, I, I, I],
    [I, I, I, 8, I, 16, I, 14],
    [I, I, I, I, 16, I, 20, 18],
    [I, 5, I, I, I, 20, I, I],
    [I, I, 10, I, 14, 18, I, I],
  ];

  private graph = [
    [0,0,0,0,0,0,0],
    [0,0,1,1,0,0,0],
    [0,1,0,0,1,0,0],
    [0,1,0,0,1,0,0],
    [0,0,1,1,0,1,1],
    [0,0,0,0,1,0,0],
    [0,0,0,0,1,0,0]
  ];

  bfs() {
    BFS(this.graph, 4);
  }

  dfs() {
    DFS(this.graph, 4);
  }

  primsMST() {
    PrimsMST(this.cost);
  }
}

const graph = new Graph();

// graph.primsMST();
// graph.bfs();
graph.dfs();