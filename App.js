import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRef, useEffect, useState } from 'react';
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

export default function app() {
	const [count, setCount] = useState(0);
	const chessboardRef = useRef();

	const nextMove = async () => {
		try {
			await chessboardRef.current?.move(moves[count]);
			setCount(count + 1);
		} catch {
			alert('Game over');
		}
	};

	//useEffect(() => {
	//	(async () => {
	//		await chessboardRef.current?.move({ from: 'e2', to: 'e4' });
	//		await chessboardRef.current?.move({ from: 'e7', to: 'e5' });
	//		await chessboardRef.current?.move({ from: 'd1', to: 'f3' });
	//		await chessboardRef.current?.move({ from: 'a7', to: 'a6' });
	//		await chessboardRef.current?.move({ from: 'f1', to: 'c4' });
	//		await chessboardRef.current?.move({ from: 'a6', to: 'a5' });
	//		await chessboardRef.current?.move({ from: 'f3', to: 'f7' });
	//	})();
	//}, []);

	return (
		<View style={styles.container}>
			<Text>GTE</Text>
			<StatusBar style="auto" />
			<Chessboard ref={chessboardRef} durations={{ move: 250 }} />
			<View style={styles.buttonContainer}>
				<Button style={styles.button} title="Previous Move" />
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
