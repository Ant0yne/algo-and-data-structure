import { useCallback } from "react";
import { useImmer } from "use-immer";
// cSpell:ignore Immer, immer

const QuickSort = () => {
	const [arr, setArr] = useImmer<number[]>([]);

	const partition = (
		type: string,
		array: number[],
		start: number,
		end: number
	): number => {
		const pivotValue = arr[start];
		let swapIndex = start;

		for (let i = start + 1; i <= end; i++) {
			if (
				(pivotValue > arr[i] && type === "asc") ||
				(pivotValue < arr[i] && type === "desc")
			) {
				swapIndex++;

				if (i !== swapIndex) {
					// swap
					[array[i], array[swapIndex]] = [array[swapIndex], array[i]];
				}
			}
		}

		if (swapIndex !== start) {
			// swap pivot value to final place
			[array[swapIndex], array[start]] = [array[start], array[swapIndex]];
		}

		return swapIndex;
	};

	const quickSort = (
		type: string,
		array: number[],
		start: number,
		end: number
	): number[] => {
		// Base case
		if (start >= end) return array;

		let pivotIndex = partition(type, array, start, end);

		// left
		quickSort(type, array, start, pivotIndex - 1);
		// right
		quickSort(type, array, pivotIndex + 1, end);

		return array;
	};

	const modifyArr = useCallback(
		(type: string) => {
			if (type === "add") {
				setArr((draft: number[]) => {
					draft.push(Math.floor(Math.random() * (10000 - 1) + 1));
				});
			} else if (type === "remove") {
				setArr((draft: number[]) => {
					draft.pop();
				});
			} else {
				setArr([]);
			}
		},
		[arr]
	);

	const sort = (type: string) => {
		const tempArr = [...arr];
		const result = quickSort(type, tempArr, 0, tempArr.length - 1);

		setArr(result);
	};

	return (
		<div>
			<h2>Quick Sort</h2>
			{arr.length > 0 && (
				<div>
					{arr.map((elem) => (
						<p key={elem}>{elem}</p>
					))}
				</div>
			)}
			{arr.length <= 10 && (
				<button onClick={() => modifyArr("add")}>
					Ajouter un nombre aléatoire au tableau
				</button>
			)}
			{arr.length > 0 && (
				<>
					<button onClick={() => modifyArr("remove")}>
						Enlever le dernier nombre du tableau
					</button>
					<button onClick={() => modifyArr("delete")}>
						Supprimer tous les nombres
					</button>
				</>
			)}
			{arr.length > 1 && (
				<>
					<button onClick={() => sort("asc")}>
						Ranger les nombres par ordre croissant
					</button>
					<button onClick={() => sort("desc")}>
						Ranger les nombres par ordre décroissant
					</button>
				</>
			)}
		</div>
	);
};

export default QuickSort;
