

export default function DFS(graph, start, visited = new Array(graph.length).fill(0)) {

  if (visited[start] === 0) {
    print(start);
    visited[start] = 1;
    for(let j = 1; j < graph.length; j++) {
      if (graph[start][j] === 1 && visited[j] === 0) {
        DFS(graph, j, visited);
      }
    }
  }
}

function print(i) {
  console.log(i);
}