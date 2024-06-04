const BinarySearchTree = () => {
	class Node {
		data: number;
		left: Node | null;
		right: Node | null;

		constructor(data: number) {
			this.data = data;
			this.left = null;
			this.right = null;
		}
	}

	class BST {
		root: Node | null;

		constructor() {
			this.root = null;
		}

		insert(data: number): void {
			const newNode = new Node(data);

			if (this.root === null) {
				this.root = newNode;
			} else {
				this.insertNode(this.root, newNode);
			}
		}

		insertNode(node: Node, newNode: Node): void {
			if (newNode.data < node.data) {
				if (node.left === null) {
					node.left = newNode;
				} else {
					this.insertNode(node.left, newNode);
				}
			} else {
				if (node.right === null) {
					node.right = newNode;
				} else {
					this.insertNode(node.right, newNode);
				}
			}
		}

		findMinNode(node: Node): Node {
			if (node.left === null) {
				return node;
			} else {
				return this.findMinNode(node.left);
			}
		}

		remove(data: number): void {
			this.root = this.removeNode(this.root, data);
		}

		removeNode(node: Node | null, key: number): Node | null {
			if (node === null) {
				return null;
			} else if (key < node.data) {
				node.left = this.removeNode(node.left, key);
				return node;
			} else if (key > node.data) {
				node.right = this.removeNode(node.right, key);
				return node;
			} else {
				if (node.left === null && node.right === null) {
					node = null;
					return node;
				}

				if (node.left === null) {
					node = node.right;
					return node;
				} else if (node.right === null) {
					node = node.left;
					return node;
				}

				const minNode = this.findMinNode(node.right);
				node.data = minNode.data;
				node.right = this.removeNode(node.right, minNode.data);
				return node;
			}
		}
	}

	return <div>BinarySearchTree</div>;
};

export default BinarySearchTree;
