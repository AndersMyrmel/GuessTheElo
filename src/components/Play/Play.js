import { View } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Styles } from './Styles';
import { PgnConverter } from '../../services/PgnConverter';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import Chessboard from 'react-native-chessboard';
import { PreviousMove, ResetBoard, NextMove, Game } from './Utilities/Index';

export const Play = () => {
	const [count, setCount] = useState(0);
	const [fenArray, updateFenArray] = useState([]);
	const [moves, setMoves] = useState();
	const chessboardRef = useRef();

	useEffect(() => {
		const GameConverter = {
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
		).withConverter(GameConverter);

		const getGame = async () => {
			const docSnap = await getDoc(ref);
			const game = docSnap.data();
			setMoves(PgnConverter(game.moves));
		};

		getGame().catch(console.error);
	}, []);

	return (
		<View style={Styles.container}>
			<Chessboard ref={chessboardRef} durations={{ move: 125 }} />
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
