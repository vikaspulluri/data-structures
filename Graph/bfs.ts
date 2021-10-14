import { Queue } from '../Queue/Queue';

export default function BFS(graph, start) {
  const q = new Queue();
  const visited = new Array(graph.length).fill(0);

  let i = start;
  print(i);
  visited[i] = 1;
  q.enqueue(i);

  while(!q.isEmpty()) {
    i = q.dequeue();
    for (let j = 1; j < graph.length; j++) {
      if (graph[i][j] === 1 && visited[j] === 0) {
        print(j);
        visited[j] = 1;
        q.enqueue(j);
      }
    }
  }
}

function print(i) {
  console.log(i);
}