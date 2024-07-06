/* Write a JavaScript program for Floyd Warshall All Pairs Shortest Path algorithm.

Given Graph :

	 Graph = [
		[0, 5, INF, 10],
		[INF, 0, 3, INF],
		[INF, INF, 0, 1],
		[INF, INF, INF, 0],
	];

Expected Output :
-----------------
0       5       8       9
INF     0       3       4
INF    INF      0       1
INF    INF      INF     0

*/


var INF = 99999;
class AllPairShortestPath {
	constructor() {
		this.V = 4;
	}

	floydWarshall(graph) {
		//Write your code here
		let dist = Array.from(Array(this.V), () => new Array(this.V).fill(0));
		//copy the input graph to the distance martrix
		for (let i = 0; i < this.V; i++){
		    for (let j = 0; j < this.V; j++){
		        dist[i][j] = graph[i][j];
		    }
		}
        // Add all vertices one by one to the set of intermediate vertices
        for (let k = 0; k < this.V; k++){
            //pick all vertices as source one by one
            for (let i = 0; i < this.V; i++){
                //pick all vertices as destination for the above picked source
                for (let j = 0; j < this.V; j++) {
                    //If vertex k is on the shortest path from i to j,
                    //then update the value of dis[i][j]
                    if(dist[i][k] + dist[k][j] < dist[i][j]){
                        dist[i][j] = dist[i][k] + dist[k][j]
                    }
                }
            }
        }
        
		// Print the shortest distance matrix
		this.printSolution(dist);
	}

	printSolution(dist) {
		for (let i = 0; i < this.V; ++i) {
		    let row = '';
			for (let j = 0; j < this.V; ++j) {
			    if (dist[i][j] == INF) {
				    row += "INF".padEnd(7, ' ');
			    } else {
				    row += dist[i][j].toString().padEnd(7, ' ');
			    }
			}
			console.log(row);
		}
	}
}
var graph = [
	[0, 5, INF, 10],
	[INF, 0, 3, INF],
	[INF, INF, 0, 1],
	[INF, INF, INF, 0],
];

let a = new AllPairShortestPath();

// Print the solution
a.floydWarshall(graph);
	
