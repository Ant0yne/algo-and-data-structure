import { useState } from "react";
import { type SearchProps, type Result } from "../../lib/types";

const BinarySearch = ({ arr }: SearchProps) => {
	const [loading, setLoading] = useState(true);
	const [result, setResult] = useState<Result | null>(null);
	const [number, setNumber] = useState("");

	const handleSearch = (list: number[], searchedNumber: number): Result => {
		let startIndex: number = 0;
		let endIndex: number = list.length - 1;
		const iterationArr: number[] = [];

		while (startIndex <= endIndex) {
			// let mid = Math.floor((startIndex + endIndex) / 2);
			let midIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);

			if (list[midIndex] === searchedNumber) {
				iterationArr.push(list[midIndex]);
				setLoading(false);
				return { result: midIndex, iterationArr };
			} else if (list[midIndex] < searchedNumber) {
				iterationArr.push(list[midIndex]);
				startIndex = midIndex + 1;
			} else {
				iterationArr.push(list[midIndex]);
				endIndex = midIndex - 1;
			}
		}

		setLoading(false);

		return {
			result: -1,
			iterationArr,
		};
	};

	return (
		<div>
			<h2>Binary Search</h2>
			<p>
				Le tableau a {arr.length} éléments, de 1 à {arr[arr.length - 1]}
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

export default BinarySearch;
