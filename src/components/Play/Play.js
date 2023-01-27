import { View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Styles } from './Styles';
import { PgnConverter } from '../../services/PgnConverter';
import { PreviousMove, ResetBoard, NextMove, Game } from './Utilities/Index';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import Chessboard from 'react-native-chessboard';

const pgn =
	'1. e4 e6 2. d4 b6 3. a3 Bb7 4. Nc3 Nh6 5. Bxh6 gxh6 6. Be2 Qg5 7. Bg4 h5 8. Nf3 Qg6 9. Nh4 Qg5 10. Bxh5 Qxh4 11. Qf3 Kd8 12. Qxf7 Nc6 13. Qe8# 1-0';

const moves = PgnConverter(pgn);

export const Play = () => {
	const [count, setCount] = useState(0);
	const [fenArray, updateFenArray] = useState([]);
	const chessboardRef = useRef();

	useEffect(() => {
		const gameConverter = {
			fromFirestore: (snapshot, options) => {
				const data = snapshot.data(options);
				return new Game(
					data.White,
					data.Black,
					data.Result,
					data.Whiteelo,
					data.Blackelo,
					data.Moves
				);
			},
		};

		const ref = doc(
			db,
			'games',
			(Math.floor(Math.random() * 1000) + 1).toString()
		).withConverter(gameConverter);
		const getGame = async () => {
			const docSnap = await getDoc(ref);
			if (docSnap.exists()) {
				const game = docSnap.data();
				console.log(game);
			} else {
				console.log('No such document!');
			}
		};

		getGame();
	}, []);

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
