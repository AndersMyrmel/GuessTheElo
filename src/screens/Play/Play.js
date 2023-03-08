import { View } from 'react-native';
import { useEffect, useReducer, useRef } from 'react';
import { Styles } from './Styles';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import Chessboard from 'react-native-chessboard';
import { PgnConverter } from '../../services/PgnConverter';
import { GameReducer, INITIAL_STATE } from './utilities/GameReducer';
import {
	PreviousMove,
	ResetBoard,
	NextMove,
	GameConverter,
} from './utilities/Index';

export const Play = () => {
	const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);
	const chessboardRef = useRef();

	useEffect(() => {
		const ref = doc(
			db,
			'games',
			(Math.floor(Math.random() * 1000) + 1).toString()
		).withConverter(GameConverter);

		const getGame = async () => {
			const docSnap = await getDoc(ref);
			const game = docSnap.data();
			dispatch({ type: 'setmoves', payload: PgnConverter(game.moves) });
		};

		getGame().catch(console.error);
	}, []);

	return (
		<View style={Styles.container}>
			<Chessboard ref={chessboardRef} durations={{ move: 150 }} />
			<View style={Styles.buttonContainer}>
				<ResetBoard board={chessboardRef} dispatch={dispatch} />
				<PreviousMove board={chessboardRef} state={state} dispatch={dispatch} />
				<NextMove board={chessboardRef} state={state} dispatch={dispatch} />
			</View>
		</View>
	);
};
