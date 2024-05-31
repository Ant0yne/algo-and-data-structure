type TableEntry = [string, number];

const HashTable = () => {
	class HashTable {
		table: TableEntry[][];
		size: number;

		constructor() {
			this.table = new Array(127);
			this.size = 0;
		}

		_hash(key: string): number {
			let hash = 0;
			for (let i = 0; i < key.length; i++) {
				hash += key.charCodeAt(i);
			}
			return hash % this.table.length;
		}

		set(key: string, value: number): void {
			const index = this._hash(key);
			if (this.table[index]) {
				for (let i = 0; i < this.table[index]?.length; i++) {
					// Find the key/value pair in the chain
					if (this.table[index][i][0] === key) {
						this.table[index][i][1] = value;
						return;
					}
				}
				// not found, push a new key/value pair
				this.table[index].push([key, value]);
			} else {
				this.table[index] = [];
				this.table[index].push([key, value]);
			}

			this.size++;
		}

		get(key: string): number | undefined {
			const index = this._hash(key);
			if (this.table[index]) {
				for (let i = 0; i < this.table.length; i++) {
					if (this.table[index][i][0] === key) {
						return this.table[index][i][1];
					}
				}
			}
			return undefined;
		}

		remove(key: string): boolean {
			const index = this._hash(key);

			if (this.table[index] && this.table[index]?.length) {
				for (let i = 0; i < this.table.length; i++) {
					if (this.table[index][i][0] === key) {
						this.table[index].splice(i, 1);
						this.size--;
						return true;
					}
				}
			}
			return false;
		}

		display(): void {
			this.table.forEach((values: TableEntry[], index: number) => {
				const chainedValues = values.map(
					([key, value]) => `[${key}: ${value}]`
				);
				console.log(`${index}: ${chainedValues}`);
			});
		}
	}

	// const ht = new HashTable();
	// ht.set("France", 111);
	// ht.set("Spain", 150);
	// ht.set("ǻ", 192);

	// ht.display();
	// // 83: [ France: 111 ]
	// // 126: [ Spain: 150 ],[ ǻ: 192 ]

	// console.log(ht.size); // 3
	// ht.remove("Spain");
	// ht.display();
	// // 83: [ France: 111 ]
	// // 126: [ ǻ: 192 ]
	// console.log(ht.size); // 2

	return <div>HashTable</div>;
};

export default HashTable;
