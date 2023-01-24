import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useRef, useEffect } from 'react';
import Chessboard from 'react-native-chessboard';

export default function app() {
	const chessboardRef = useRef();

	useEffect(() => {
		(async () => {
			await chessboardRef.current?.move({ from: 'e2', to: 'e4' });
			await chessboardRef.current?.move({ from: 'e7', to: 'e5' });
			await chessboardRef.current?.move({ from: 'd1', to: 'f3' });
			await chessboardRef.current?.move({ from: 'a7', to: 'a6' });
			await chessboardRef.current?.move({ from: 'f1', to: 'c4' });
			await chessboardRef.current?.move({ from: 'a6', to: 'a5' });
			await chessboardRef.current?.move({ from: 'f3', to: 'f7' });
		})();
	}, []);

	return (
		<View style={styles.container}>
			<Text>GTE</Text>
			<StatusBar style="auto" />
			<Chessboard ref={chessboardRef} durations={{ move: 1000 }} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
