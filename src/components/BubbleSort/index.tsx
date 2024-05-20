import { useCallback } from "react";
import { useImmer } from "use-immer";
//cSpell:ignore Immer, immer

// FIXME:
const BubbleSort = () => {
	const [arr, setArr] = useImmer<number[]>([]);

	const modifyArr = useCallback(
		(type: string) => {
			if (type === "add") {
				setArr((draft) => {
					draft.push(Math.floor(Math.random() * (10000 - 1) + 1));
				});
			} else if (type === "remove") {
				setArr((draft) => {
					draft.pop();
				});
			} else {
				setArr([]);
			}
		},
		[arr]
	);

	const sort = useCallback(
		(type: string) => {
			if (type === "asc") {
				let change = true;
				do {
					change = false;
					// console.log("longueur de arr : ", arr.length);
					for (let i = 0; i < arr.length - 1; i++) {
						console.log("i : ", i);
						if (arr[i] > arr[i + 1]) {
							let temp = arr[i];
							console.log("temp", temp);
							setArr((draft) => {
								console.log("draft", draft);
								draft[i] = draft[i + 1];
							});
							setArr((draft) => {
								draft[i + 1] = temp;
							});
							// console.log(arr);
							// change = true;
						}
					}
				} while (change);
			} else {
				let change = true;
				do {
					change = false;
					for (let i = arr.length; i > 0; i--) {
						console.log("i : ", i);
						if (arr[i] > arr[i - 1]) {
							let temp = arr[i];
							setArr((draft) => {
								console.log("draft", draft);
								draft[i] = draft[i - 1];
							});
							setArr((draft) => {
								draft[i - 1] = temp;
							});
							// change = true;
						}
					}
				} while (change);
			}
		},
		[arr]
	);

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
