import "./App.css";
import BinarySearch from "./components/BinarySearch";
import BubbleSort from "./components/BubbleSort";
import InsertionSort from "./components/InsertionSort";
import InterpolationSearch from "./components/InterpolationSearch";
import SelectionSort from "./components/SelectionSort";

function App() {
	// Create a 1 to 100000 array
	const arr: number[] = [];
	let arrLength: number = 100000;
	let counter: number = 1;

	while (arr.length < arrLength) {
		arr.push(counter);
		counter++;
	}

	// Create an array with 30 numbers, each is the double of the previous
	//cSpell:ignore Mult
	const arrMult2: number[] = [];
	arrLength = 30;
	counter = 1;

	while (arrMult2.length < arrLength) {
		arrMult2.push(counter);
		counter *= 2;
	}

	console.log(arrMult2);

	return (
		<main>
			<BinarySearch arr={arr} />
			<InterpolationSearch arr={arrMult2} />
			<BubbleSort />
			<SelectionSort />
			<InsertionSort />
		</main>
	);
}

export default App;
