import { View } from 'react-native';
import { useRef, useState } from 'react';
import { Styles } from './Styles';
import { PgnConverter } from '../../utilities/PgnConverter';
import { PreviousMove, ResetBoard, NextMove } from './Actions/Index';
import Chessboard from 'react-native-chessboard';

const pgn =
	'1. e4 e6 2. d4 b6 3. a3 Bb7 4. Nc3 Nh6 5. Bxh6 gxh6 6. Be2 Qg5 7. Bg4 h5 8. Nf3 Qg6 9. Nh4 Qg5 10. Bxh5 Qxh4 11. Qf3 Kd8 12. Qxf7 Nc6 13. Qe8# 1-0';

const moves = PgnConverter(pgn);

export const Play = () => {
	const [count, setCount] = useState(0);
	const [fenArray, updateFenArray] = useState([]);
	const chessboardRef = useRef();

	return (
		<View style={Styles.container}>
			<Chessboard ref={chessboardRef} durations={{ move: 150 }} />
			<View style={Styles.buttonContainer}>
				<ResetBoard board={chessboardRef} setCount={setCount} />
				<PreviousMove
					board={chessboardRef}
					count={count}
					setCount={setCount}
					fenArr={fenArray}
				/>
				<NextMove
					board={chessboardRef}
					moves={moves}
					count={count}
					setCount={setCount}
					fenArr={fenArray}
					updateArr={updateFenArray}
				/>
			</View>
		</View>
	);
};
