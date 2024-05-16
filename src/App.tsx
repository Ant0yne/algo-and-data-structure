import "./App.css";
import BinarySearch from "./components/BinarySearch";
import InterpolationSearch from "./components/InterpolationSearch";

function App() {
	const arr: number[] = [];
	let arrLength: number = 100000;
	let counter: number = 1;

	while (arr.length < arrLength) {
		arr.push(counter);
		counter++;
	}

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
		<>
			<BinarySearch arr={arr} />
			<InterpolationSearch arr={arrMult2} />
		</>
	);
}

export default App;
