import { useCallback, useState } from "react";
import { produce } from "immer";
//cSpell:ignore Immer, immer

const BubbleSort = () => {
	const [arr, setArr] = useState<number[]>([]);

	const modifyArr = useCallback(
		(type: string) => {
			if (type === "add") {
				setArr(
					produce((draft: number[]) => {
						draft.push(Math.floor(Math.random() * (10000 - 1) + 1));
					})
				);
			} else if (type === "remove") {
				setArr(
					produce((draft: number[]) => {
						draft.pop();
					})
				);
			} else {
				setArr([]);
			}
		},
		[arr]
	);

	const sort = (type: string) => {
		const tempArr = [...arr];
		if (type === "asc") {
			let isSwapped = true;

			for (let i = 0; i < tempArr.length; i++) {
				isSwapped = false;

				for (let j = 0; j < tempArr.length - i - 1; j++) {
					if (tempArr[j] > tempArr[j + 1]) {
						let temp = tempArr[j];
						tempArr[j] = tempArr[j + 1];
						tempArr[j + 1] = temp;
						isSwapped = true;
					}
				}

				if (!isSwapped) {
					break;
				}
			}
		} else {
			let isSwapped = true;

			for (let i = tempArr.length; i > 0; i--) {
				isSwapped = false;
				for (let j = tempArr.length - i; j > 0; j--) {
					if (tempArr[j] > tempArr[j - 1]) {
						let temp = tempArr[j];
						tempArr[j] = tempArr[j - 1];
						tempArr[j - 1] = temp;
						isSwapped = true;
					}
				}
			}
		}
		setArr(tempArr);
	};

	return (
		<div>
			<h2>Bubble Sort</h2>
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

export default BubbleSort;
