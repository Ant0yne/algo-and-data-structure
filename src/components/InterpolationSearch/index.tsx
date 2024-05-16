import { useState } from "react";
import { type SearchProps, type Result } from "../../lib/types";

const InterpolationSearch = ({ arr }: SearchProps) => {
	const [loading, setLoading] = useState(true);
	const [number, setNumber] = useState("");
	const [result, setResult] = useState<Result | null>(null);

	const handleSearch = (list: number[], searchedNumber: number): Result => {
		let startIndex: number = 0;
		let endIndex: number = list.length - 1;
		const iterationArr: number[] = [];

		while (
			startIndex <= endIndex
			// && searchedNumber >= list[startIndex] &&
			// searchedNumber <= list[endIndex]
		) {
			let probe =
				startIndex +
				((searchedNumber - list[startIndex]) * (endIndex - startIndex)) /
					(list[endIndex] - list[startIndex]);
			probe = Math.round(probe);

			if (list[probe] === searchedNumber) {
				iterationArr.push(list[probe]);
				setLoading(false);
				return { result: probe, iterationArr };
			} else if (list[probe] < searchedNumber) {
				iterationArr.push(list[probe]);
				startIndex = probe + 1;
			} else {
				iterationArr.push(list[probe]);
				endIndex = probe - 1;
			}
		}
		setLoading(false);

		return { result: -1, iterationArr };
	};

	return (
		<div>
			<h2>Interpolation</h2>
			<p>
				Le tableau a {arr.length} éléments, de 1 à {arr[arr.length - 1]}. Chaque
				nombre est le double du précédent
			</p>
			<input
				type="number"
				placeholder="Number to search"
				name="email"
				value={number}
				onFocus={() => {
					setLoading(true);
					setNumber("");
				}}
				onChange={(e) => {
					setNumber(e.target.value);
				}}
			/>
			<button
				onClick={(e) => {
					e.preventDefault();
					setResult(handleSearch(arr, parseInt(number)));
				}}>
				CLick to search
			</button>
			{loading ? null : (
				<div>
					{result?.result !== -1 || null ? (
						<>
							<p>{number} a été trouvé !</p>
							<ul>
								En seulement {result?.iterationArr.length} étapes :
								{result?.iterationArr.map((search, i) => (
									<li key={i}>{search}</li>
								))}
							</ul>
						</>
					) : (
						<p>{number} n'a pas été trouvé 😓</p>
					)}
				</div>
			)}
		</div>
	);
};

export default InterpolationSearch;
