// cSpell: words inorder preorder postorder

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
				this._insertNode(this.root, newNode);
			}
		}

		_insertNode(node: Node, newNode: Node): void {
			if (newNode.data < node.data) {
				if (node.left === null) {
					node.left = newNode;
				} else {
					this._insertNode(node.left, newNode);
				}
			} else {
				if (node.right === null) {
					node.right = newNode;
				} else {
					this._insertNode(node.right, newNode);
				}
			}
		}

		getRootNode() {
			return this.root;
		}

		findMinNode(node: Node): Node {
			if (node.left === null) {
				return node;
			} else {
				return this.findMinNode(node.left);
			}
		}

		preorder(node: Node | null, nodes: number[] = []): number[] {
			if (node !== null) {
				nodes.push(node.data);
				this.preorder(node.left, nodes);
				this.preorder(node.right, nodes);
			}
			return nodes;
		}

		inorder(node: Node | null, nodes: number[] = []): number[] {
			if (node !== null) {
				this.inorder(node.left, nodes);
				nodes.push(node.data);
				this.inorder(node.right, nodes);
			}
			return nodes;
		}

		postorder(node: Node | null, nodes: number[] = []): number[] {
			if (node !== null) {
				this.postorder(node.left, nodes);
				this.postorder(node.right, nodes);
				nodes.push(node.data);
			}
			return nodes;
		}

		remove(data: number): void {
			this.root = this._removeNode(this.root, data);
		}

		_removeNode(node: Node | null, key: number): Node | null {
			if (node === null) {
				return null;
			} else if (key < node.data) {
				node.left = this._removeNode(node.left, key);
				return node;
			} else if (key > node.data) {
				node.right = this._removeNode(node.right, key);
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
				node.right = this._removeNode(node.right, minNode.data);
				return node;
			}
		}
	}

	// create an object for the BinarySearchTree
	const BSTree = new BST();

	// Inserting nodes to the BinarySearchTree
	BSTree.insert(15);
	BSTree.insert(25);
	BSTree.insert(10);
	BSTree.insert(7);
	BSTree.insert(22);
	BSTree.insert(17);
	BSTree.insert(13);
	BSTree.insert(5);
	BSTree.insert(9);
	BSTree.insert(27);

	console.log(BSTree.getRootNode());

	console.log("preorder:", BSTree.preorder(BSTree.getRootNode()));
	console.log("inorder:", BSTree.inorder(BSTree.getRootNode()));
	console.log("postorder:", BSTree.postorder(BSTree.getRootNode()));
	// BSTree.remove(22);
	// console.log("inorder:", BSTree.inorder(BSTree.getRootNode()));

	return <div>BinarySearchTree</div>;
};

export default BinarySearchTree;
