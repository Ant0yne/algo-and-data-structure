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

		removeEdge(indexNode1: number, indexNode2: number) {
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
	}

	const test = new UUGraph(5);
	console.log("UUGraph", test.adjacencyMatrix);
	test.addEdge(2, 3);
	console.log("UUGraph", test.adjacencyMatrix);
	console.log("UUGraph", test.getNeighbors(3));
	console.log("UUGraph", test.hasEdge(3, 2));
	test.removeEdge(3, 2);
	console.log("UUGraph", test.adjacencyMatrix);

	return <div>AdjacencyMatrix</div>;
};

export default AdjacencyMatrix;
