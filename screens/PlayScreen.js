import { StyleSheet, Text, View, Button } from 'react-native';
import { useRef, useState } from 'react';
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

export default function PlayScreen() {
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
			<Chessboard ref={chessboardRef} durations={{ move: 225 }} />
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
		backgroundColor: '#1d1d1d',
		color: '#43ca83',
		justifyContent: 'center',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		marginTop: 20,
		paddingRight: 30,
		marginHorizontal: 20,
		marginRight: 20,
	},
	button: {},
});
