const AdjacencyMatrix = () => {
	// Unweighted and Undirected
	class UUGraph {
		numberNodes: number;
		adjacencyMatrix: number[][];

		constructor(number: number) {
			this.numberNodes = number;
			this.adjacencyMatrix = [];
			for (let i = 0; i < this.numberNodes; i++) {
				this.adjacencyMatrix[i] = new Array(this.numberNodes).fill(0);
			}
		}

		addEdge(indexNode1: number, indexNode2: number): void {
			this.adjacencyMatrix[indexNode1][indexNode2] = 1;
			this.adjacencyMatrix[indexNode2][indexNode1] = 1;
		}

		getNeighbors(indexNode: number): number[] {
			return this.adjacencyMatrix[indexNode];
		}

		hasEdge(indexNode1: number, indexNode2: number): boolean {
			if (
				indexNode1 >= 0 &&
				indexNode1 < this.numberNodes &&
				indexNode2 >= 0 &&
				indexNode2 < this.numberNodes
			) {
				return (
					this.adjacencyMatrix[indexNode1][indexNode2] === 1 &&
					this.adjacencyMatrix[indexNode2][indexNode1] === 1
				);
			}
			return false;
		}

		removeEdge(indexNode1: number, indexNode2: number): void {
			if (
				indexNode1 >= 0 &&
				indexNode1 < this.numberNodes &&
				indexNode2 >= 0 &&
				indexNode2 < this.numberNodes
			) {
				this.adjacencyMatrix[indexNode1][indexNode2] = 0;
				this.adjacencyMatrix[indexNode2][indexNode1] = 0;
			}
		}

		depthFirstSearch(src: number) {
			const visited: boolean[] = new Array(this.numberNodes).fill(false);
			this._dFSHandler(src, visited);
		}

		_dFSHandler(src: number, visited: boolean[]) {
			if (visited[src]) {
				return;
			} else {
				visited[src] = true;
				console.log(src + " visited DFS");
			}

			for (let i = 0; i < this.adjacencyMatrix[src].length; i++) {
				if (this.adjacencyMatrix[src][i] === 1) {
					this._dFSHandler(i, visited);
				}
			}

			return;
		}

		breadthFirstSearch(src: number): void {
			const visited: number[] = [src];
			const queue: number[] = [src];
			while (queue.length > 0) {
				const currentNode: number = queue.shift();
				console.log(currentNode + " visited BFS");
				for (let i = 0; i < this.adjacencyMatrix[currentNode].length - 1; i++) {
					if (this.adjacencyMatrix[currentNode][i] && !visited[i]) {
						visited[i] = currentNode;
						queue.push(i);
					}
				}
			}
		}
	}

	// const test = new UUGraph(5);
	// console.log("UUGraph", test.adjacencyMatrix);
	// test.addEdge(2, 3);
	// console.log("UUGraph", test.adjacencyMatrix);
	// console.log("UUGraph", test.getNeighbors(3));
	// console.log("UUGraph", test.hasEdge(3, 2));
	// test.removeEdge(3, 2);
	// console.log("UUGraph", test.adjacencyMatrix);

	const test4 = new UUGraph(6);
	test4.addEdge(2, 3);
	test4.addEdge(3, 4);
	test4.addEdge(4, 5);
	test4.addEdge(2, 1);
	test4.depthFirstSearch(2);
	test4.breadthFirstSearch(2);

	// Unweighted and Directed
	class UDGraph {
		numberNodes: number;
		adjacencyMatrix: number[][];

		constructor(num: number) {
			this.numberNodes = num;
			this.adjacencyMatrix = [];
			for (let i = 0; i < this.numberNodes; i++) {
				this.adjacencyMatrix[i] = new Array(this.numberNodes).fill(0);
			}
		}

		addEdge(indexFromNode: number, indexToNode: number): void {
			this.adjacencyMatrix[indexFromNode][indexToNode] = 1;
		}

		getNeighbors(indexNode: number): number[] {
			return this.adjacencyMatrix[indexNode];
		}

		hasEdge(indexFromNode: number, indexToNode: number): boolean {
			if (
				indexFromNode >= 0 &&
				indexFromNode < this.numberNodes &&
				indexToNode >= 0 &&
				indexToNode < this.numberNodes
			) {
				return this.adjacencyMatrix[indexFromNode][indexToNode] === 1;
			}
			return false;
		}

		removeEdge(indexFromNode: number, indexToNode: number): void {
			if (
				indexFromNode >= 0 &&
				indexFromNode < this.numberNodes &&
				indexToNode >= 0 &&
				indexToNode < this.numberNodes
			) {
				this.adjacencyMatrix[indexFromNode][indexToNode] = 0;
			}
		}

		depthFirstSearch(src: number): void {
			const visited: boolean[] = new Array(this.numberNodes).fill(false);
			this._dFSHandler(src, visited);
		}

		_dFSHandler(src: number, visited: boolean[]): void {
			if (visited[src]) {
				return;
			} else {
				visited[src] = true;
				console.log(src + " visited DFS");
			}

			for (let i = 0; i < this.adjacencyMatrix[src].length; i++) {
				if (this.adjacencyMatrix[src][i] === 1) {
					this._dFSHandler(i, visited);
				}
			}

			return;
		}

		breadthFirstSearch(src: number): void {
			const visited: number[] = [src];
			const queue: number[] = [src];
			while (queue.length > 0) {
				const currentNode: number = queue.shift();
				console.log(currentNode + " visited BFS");
				for (let i = 0; i < this.adjacencyMatrix[currentNode].length - 1; i++) {
					if (this.adjacencyMatrix[currentNode][i] && !visited[i]) {
						visited[i] = currentNode;
						queue.push(i);
					}
				}
			}
		}
	}

	// const test2 = new UDGraph(5);
	// console.log("UDGraph", test2.adjacencyMatrix);
	// test2.addEdge(2, 3);
	// console.log("UDGraph", test2.adjacencyMatrix);
	// console.log("UDGraph", test2.getNeighbors(3));
	// console.log("UDGraph", test2.getNeighbors(2));
	// console.log("UDGraph", test2.hasEdge(3, 2));
	// console.log("UDGraph", test2.hasEdge(2, 3));
	// test2.removeEdge(2, 3);
	// console.log("UDGraph", test2.adjacencyMatrix);

	// const test3 = new UDGraph(6);
	// test3.addEdge(2, 3);
	// test3.addEdge(3, 4);
	// test3.addEdge(4, 5);
	// test3.addEdge(2, 1);
	// test3.depthFirstSearch(2);
	// test3.breadthFirstSearch(2);

	return <div>AdjacencyMatrix</div>;
};

export default AdjacencyMatrix;
