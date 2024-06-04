const LinkedList = () => {
	class ListNode {
		data: number;
		next: null | ListNode;

		constructor(data: number) {
			this.data = data;
			this.next = null;
		}
	}

	class LinkedListClass {
		head: null | ListNode;
		size: number;

		constructor() {
			this.head = null;
			this.size = 0;
		}

		// adds an element at the end
		// of list
		add(element: number): void {
			// creates a new node
			let node = new ListNode(element);

			// to store current node
			let current: ListNode;

			// if list is Empty add the
			// element and make it head
			if (this.head === null) this.head = node;
			else {
				current = this.head;

				// iterate to the end of the
				// list
				while (current.next) {
					current = current.next;
				}

				// add node
				current.next = node;
			}
			this.size++;
		}

		// insert element at the position index
		// of the list
		insertAt(element: number, index: number): void {
			if (index < 0 || index > this.size)
				return console.log("Please enter a valid index.");
			else {
				// creates a new node
				let node = new ListNode(element);
				let curr: ListNode | null;
				let prev: ListNode | null = null;

				// add the element to the
				// first index
				if (index === 0) {
					node.next = this.head;
					this.head = node;
				} else {
					curr = this.head;
					let it = 0;

					// iterate over the list to find
					// the position to insert
					while (it < index) {
						it++;
						prev = curr;
						curr?.next ? (curr = curr.next) : (curr = null);
					}

					// adding an element
					node.next = curr;
					prev ? (prev.next = node) : null;
				}
				this.size++;
			}
		}

		// removes an element from the
		// specified location
		removeFrom(index: number): number | void {
			if (index < 0 || index >= this.size)
				return console.log("Please Enter a valid index");
			else {
				let curr: ListNode | null;
				let prev: ListNode | null;
				let it = 0;
				curr = this.head;
				prev = curr;

				// deleting first element
				if (index === 0) {
					curr?.next ? (this.head = curr.next) : (this.head = null);
				} else {
					// iterate over the list to the
					// position to remove an element
					while (it < index) {
						it++;
						prev = curr;
						curr?.next ? (curr = curr.next) : (curr = null);
					}

					// remove the element
					prev?.next && curr?.next
						? (prev.next = curr.next)
						: prev?.next
						? (prev.next = null)
						: null;
				}
				this.size--;

				// return the remove element
				return curr?.data;
			}
		}

		// removes a given element from the
		// list
		removeElement(element: number): number {
			let current = this.head;
			let prev: ListNode | null = null;

			// iterate over the list
			while (current !== null) {
				// comparing element with current
				// element if found then remove the
				// and return true
				if (current.data === element) {
					if (prev === null) {
						this.head = current.next;
					} else {
						prev.next = current.next;
					}
					this.size--;
					return current.data;
				}
				prev = current;
				current = current.next;
			}
			return -1;
		}

		// finds the index of element
		indexOf(element: number): number {
			let count = 0;
			let current = this.head;

			// iterate over the list
			while (current !== null) {
				// compare each element of the list
				// with given element
				if (current.data === element) return count;
				count++;
				current = current.next;
			}

			// not found
			return -1;
		}

		// checks the list for empty
		isEmpty(): boolean {
			return this.size === 0;
		}

		// gives the size of the list
		size_of_list(): void {
			console.log(this.size);
		}

		// prints the list items
		printList(): void {
			let curr = this.head;
			let str = "";
			while (curr) {
				str += curr.data + " ";
				curr = curr.next;
			}
			console.log(str);
		}
	}

	// __________________________________________________________________________________________
	// // creating an object for the
	// // Linkedlist class
	// let ll = new LinkedListClass();

	// // testing isEmpty on an empty list
	// // returns true
	// console.log(ll.isEmpty());

	// // adding element to the list
	// ll.add(10);

	// // prints 10
	// ll.printList();

	// // returns 1
	// console.log(ll.size_of_list());

	// // adding more elements to the list
	// ll.add(20);
	// ll.add(30);
	// ll.add(40);
	// ll.add(50);

	// // returns 10 20 30 40 50
	// ll.printList();

	// // prints 50 from the list
	// console.log("is element removed ?" + ll.removeElement(50));

	// // prints 10 20 30 40
	// ll.printList();

	// // returns 3
	// console.log("Index of 40 " + ll.indexOf(40));

	// // insert 60 at second position
	// // ll contains 10 20 60 30 40
	// ll.insertAt(60, 2);

	// ll.printList();

	// // returns false
	// console.log("is List Empty ? " + ll.isEmpty());

	// // remove 3rd element from the list
	// console.log(ll.removeFrom(3));

	// // prints 10 20 60 40
	// ll.printList();
	// __________________________________________________________________________________________

	return <div>LinkedList</div>;
};

export default LinkedList;
