const I = Infinity;

export default function main(cost) {

  const near = new Array(cost.length).fill(I); // we have 7 vertices, excluding index 0, array size is 8
  const tree = new Array(2).fill(I).map(a => new Array(cost.length - 2)); // we have 7 vertices, so 6 edges possible for spanning tree

  // initial steps
  let min = I, u, v;
  // find min edge
  for (let i = 0; i < cost.length; i++) {
    for (let j = i; j < cost.length; j++) {
      if (cost[i][j] < min) {
        min = cost[i][j]
        u = i;
        v = j;
      };
    }
  }

  tree[0][0] = u; tree[1][0] = v;
  near[u] = 0, near[v] = 0;
  
  for (let i = 1; i < near.length; i++) {
    if (near[i] !== 0) {
      near[i] = cost[i][u] < cost[i][v] ? u : v;
    }
  }

  // repitition

  for (let i = 1; i < tree[0].length; i++) { // one edge is filled in tree, need to fill others
    let min = I;
    let k;
    for (let j = 1; j < near.length; j++) {
      if (near[j] !== 0 && cost[j][near[j]] < min) {
        min = cost[j][near[j]];
        k = j;
      }
    }

    tree[0][i] = k; tree[1][i] = near[k];
    near[k] = 0;

    for (let j = 0; j < near.length; j++) {
      if (near[j] !== 0 && cost[j][k] < cost[j][near[j]]) {
        near[j] = k;
      }
    }
  }

  console.log('vertices: ');
  let totalCost = 0;
  for (let i = 0; i < tree[0].length; i++) {
    console.log(`(${tree[0][i]},${tree[1][i]})`);
    totalCost += cost[tree[0][i]][tree[1][i]];
  }
  console.log('total cost: ', totalCost);

}