/* Find the minimum spanning tree(MST) using Kruskal's for the given graph. 

Expected Output :
-----------------
Edge 	 Weight
(0-1) 	 2
(1-2) 	 3
(1-4) 	 5
(0-3) 	 6
Minimum cost= 16

*/


var V = 5;
var parent = Array(V).fill(0).map((_, index) => index);
var INF = 1000000000;

// Find set of vertex i
function find(i){
	while (parent[i] != i)
		i = parent[i];
	return i;
}

// Does union of i and j. It returns
// false if i and j are already in same
// set.
function union1(i, j){
	var a = find(i);
	var b = find(j);
	parent[a] = b;
}

// Finds MST using Kruskal's algorithm
function kruskalMST(cost){
	//Write your logic here and return the mininum cost
	let edges = [];
	for (let i = 0; i < V; i++) {
	    for (let j = i + 1; j < V; j++) {
	        if (cost[i][j] !==INF) {
	            edges.push([cost[i][j], i, j]);
	        }
	    }
	}
	
	// Sort edges based on weight
	edges.sort((a, b) => a[0] - b[0]);
	
	var minCost = 0;
	var mstEdges = [];
	
	for ( let [weight, u, v] of edges) {
	    if (find(u) !== find(v)){
	        union1(u, v);
	        minCost += weight;
	        mstEdges.push([u, v, weight]);
	    }
	    console.log("Edge \t Weight");
	}
	
	for (let [u, v, weight] of mstEdges){
	    console.log(`(${u} - ${v} \t ${weight}`);
	}
	console.log("Minimum cost=", minCost);
	
}
	
var cost = [
	[INF, 2, INF, 6, INF],
	[2, INF, 3, 8, 5],
	[INF, 3, INF, INF, 7],
	[6, 8, INF, INF, 9],
	[INF, 5, 7, 9, INF]];
// Print the solution
kruskalMST(cost);



