const AdjacencyList = () => {
	// Unweighted and Undirected
	class UUGraph {
		adjacencyList: Map<number, Set<number>>;

		constructor() {
			this.adjacencyList = new Map();
		}

		addNode(node: number): void {
			this.adjacencyList.set(node, new Set());
		}

		addEdge(node1: number, node2: number): void {
			if (this.adjacencyList.has(node1) && this.adjacencyList.has(node2)) {
				this.adjacencyList.get(node1)?.add(node2);
				this.adjacencyList.get(node2)?.add(node1);
			} else {
				console.log("The two node need to be added first.");
			}
		}

		getNeighbors(node: number): Set<number> | undefined {
			return this.adjacencyList.get(node);
		}

		hasEdge(node1: number, node2: number): boolean | undefined {
			return this.adjacencyList.get(node1)?.has(node2);
		}

		depthFirstSearch(src: number, visited = new Set()) {
			visited.add(src);
			console.log(src + " visited");
			this.adjacencyList.get(src)?.forEach((node) => {
				if (!visited.has(node)) {
					this.depthFirstSearch(node, visited);
				}
			});
		}

		breadthFirstSearch(src: number) {
			const visited: Set<number> = new Set();
			const queue: number[] = [src];
			visited.add(src);
			while (queue.length > 0) {
				const currentNode: number = queue.shift();
				console.log(currentNode + " visited");
				this.adjacencyList.get(currentNode)?.forEach((node) => {
					if (!visited.has(node)) {
						visited.add(node);
						queue.push(node);
					}
				});
			}
		}
	}

	// const test = new UUGraph();
	// test.addNode(5);
	// console.log("1", test);
	// test.addEdge(5, 2);
	// console.log("2", test);
	// test.addNode(2);
	// test.addEdge(5, 2);
	// console.log("3", test);
	// test.addNode(3);
	// test.addEdge(3, 5);
	// console.log("4", test.getNeighbors(5));
	// console.log("5", test.hasEdge(5, 2));
	// test.depthFirstSearch(5);
	// test.breadthFirstSearch(5);

	// Unweighted and Directed
	class UDGraph {
		adjacencyList: Map<number, Set<number>>;

		constructor() {
			this.adjacencyList = new Map();
		}

		addNode(node: number): void {
			this.adjacencyList.set(node, new Set());
		}

		addEdge(fromNode: number, toNode: number): void {
			if (this.adjacencyList.has(fromNode)) {
				this.adjacencyList.get(fromNode)?.add(toNode);
			} else {
				console.log("The two node need to be added first.");
			}
		}

		getNeighbors(node: number): Set<number> | undefined {
			return this.adjacencyList.get(node);
		}

		hasEdge(node1: number, node2: number): boolean | undefined {
			return this.adjacencyList.get(node1)?.has(node2);
		}

		depthFirstSearch(src: number, visited = new Set()) {
			visited.add(src);
			console.log(src + " visited");
			this.adjacencyList.get(src)?.forEach((node) => {
				if (!visited.has(node)) {
					this.depthFirstSearch(node, visited);
				}
			});
		}

		breadthFirstSearch(src: number) {
			const visited: Set<number> = new Set();
			const queue: number[] = [src];
			visited.add(src);
			while (queue.length > 0) {
				const currentNode: number = queue.shift();
				console.log(currentNode + " visited");
				this.adjacencyList.get(currentNode)?.forEach((node) => {
					if (!visited.has(node)) {
						visited.add(node);
						queue.push(node);
					}
				});
			}
		}
	}

	// const test = new UDGraph();
	// test.addNode(5);
	// console.log("1", test);
	// test.addEdge(5, 2);
	// console.log("2", test);
	// test.addNode(2);
	// test.addEdge(5, 2);
	// console.log("3", test);
	// test.addNode(3);
	// test.addEdge(3, 5);
	// console.log("4", test.getNeighbors(5));
	// console.log("5", test.hasEdge(5, 2));
	// test.depthFirstSearch(5);
	// test.breadthFirstSearch(5);

	return <div>AdjacencyList</div>;
};

export default AdjacencyList;
