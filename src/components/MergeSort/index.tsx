import { useCallback } from "react";
import { useImmer } from "use-immer";
// cSpell:ignore Immer, immer

const MergeSort = () => {
	const [arr, setArr] = useImmer<number[]>([]);

	const merge = (left: number[], right: number[], type: string): number[] => {
		let sortedArr: number[] = [];
		while (left.length && right.length) {
			if (
				(left[0] < right[0] && type === "asc") ||
				(left[0] > right[0] && type === "desc")
			) {
				sortedArr.push(left.shift()!);
			} else {
				sortedArr.push(right.shift()!);
			}
		}

		return [...sortedArr, ...left, ...right];
	};

	const mergeSort = (array: number[], type: string): number[] => {
		// Base case
		if (array.length <= 1) return array;

		let middle = Math.floor(array.length / 2);

		//Recursive call
		let left = mergeSort(array.slice(0, middle), type);
		let right = mergeSort(array.slice(middle), type);

		return merge(left, right, type);
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
		const result = mergeSort(tempArr, type);

		setArr(result);
	};

	return (
		<div>
			<h2>Merge Sort</h2>
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

export default MergeSort;
