import { Text, View, Button } from 'react-native';
import { useRef, useState } from 'react';
import Chessboard from 'react-native-chessboard';
import { pgnConverter } from '../../utilities/pgnConverter';
import { Styles } from './Styles';

const pgn =
	'1. e4 e6 2. d4 b6 3. a3 Bb7 4. Nc3 Nh6 5. Bxh6 gxh6 6. Be2 Qg5 7. Bg4 h5 8. Nf3 Qg6 9. Nh4 Qg5 10. Bxh5 Qxh4 11. Qf3 Kd8 12. Qxf7 Nc6 13. Qe8# 1-0';

const moves = pgnConverter(pgn);

export const Play = () => {
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
		<View style={Styles.container}>
			<Chessboard ref={chessboardRef} durations={{ move: 200 }} />
			<View style={Styles.buttonContainer}>
				<Button
					style={Styles.button}
					title="Previous Move"
					onPress={previousMove}
				/>
				<Button style={Styles.button} title="Next Move" onPress={nextMove} />
			</View>
		</View>
	);
};
