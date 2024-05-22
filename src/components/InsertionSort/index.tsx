import { useCallback } from "react";
import { useImmer } from "use-immer";
// cSpell:ignore Immer, immer

const InsertionSort = () => {
	const [arr, setArr] = useImmer<number[]>([]);

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
		for (let i = 1; i < tempArr.length; i++) {
			let temp = tempArr[i];
			let j = i - 1;

			while (
				(j >= 0 && tempArr[j] > temp && type === "asc") ||
				(j >= 0 && tempArr[j] < temp && type === "desc")
			) {
				tempArr[j + 1] = tempArr[j];
				j--;
			}
			tempArr[j + 1] = temp;
		}
		setArr(tempArr);
	};

	return (
		<div>
			<h2>Insertion Sort</h2>
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

export default InsertionSort;
