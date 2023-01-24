import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRef, useEffect, useState } from 'react';
import { swap } from './services/swap';
import Chessboard from 'react-native-chessboard';

const moves = [
	{ from: 'e2', to: 'e4' },
	{ from: 'e7', to: 'e5' },
	{ from: 'd1', to: 'f3' },
	{ from: 'a7', to: 'a6' },
	{ from: 'f1', to: 'c4' },
	{ from: 'a6', to: 'a5' },
	{ from: 'f3', to: 'f7' },
];

let movesCopy = moves.map((e) => Object.assign({}, e));
movesCopy.forEach((e) => swap(e, 'from', 'to'));

export default function app() {
	const [count, setCount] = useState(0);
	const [fenArr, updateFenArr] = useState([]);
	const chessboardRef = useRef();

	const nextMove = async () => {
		if (fenArr.indexOf(chessboardRef.current?.getState().fen) === -1) {
			updateFenArr((arr) => [...arr, chessboardRef.current?.getState().fen]);
		}
		try {
			await chessboardRef.current?.move(moves[count]);
			setCount(count + 1);
		} catch {
			alert('Game over');
		}
	};

	const previousMove = async () => {
		try {
			await chessboardRef.current?.resetBoard(fenArr[count - 1]);
			setCount(count - 1);
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View style={styles.container}>
			<Text>GTE</Text>
			<StatusBar style="auto" />
			<Chessboard
				ref={chessboardRef}
				durations={{ move: 250 }}
				onMove={({ state }) => {
					//console.log(state.fen, fen);
				}}
			/>
			<View style={styles.buttonContainer}>
				<Button
					style={styles.button}
					title="Previous Move"
					onPress={previousMove}
				/>
				<Button style={styles.button} title="Next Move" onPress={nextMove} />
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	buttonContainer: {
		width: '100%',
		textAlign: 'center',
		flexDirection: 'row',
	},
	button: {
		display: 'inline-block',
	},
});
