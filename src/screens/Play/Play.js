import { useEffect, useReducer, useRef } from 'react';
import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	TextInput,
	Keyboard,
} from 'react-native';
import { Styles } from './Styles';
import Chessboard from 'react-native-chessboard';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import {
	GameReducer,
	INITIAL_STATE,
	GameConverter,
	PgnConverter,
} from '../../services/Index';
import {
	PreviousMove,
	ResetBoard,
	NextMove,
	AutoPlayMoves,
	GoBack,
	HorizontalPgnScroller,
	AnsweredModal,
} from '../../components/Index';

export const Play = ({ navigation }) => {
	const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);
	const chessboardRef = useRef();
	const inputRef = useRef();

	useEffect(() => {
		const ref = doc(
			db,
			'games',
			(Math.floor(Math.random() * 1000) + 1).toString()
		).withConverter(GameConverter);

		const getGame = async () => {
			const docSnap = await getDoc(ref);
			const game = docSnap.data();

			dispatch({
				type: 'setmultiple',
				payload: {
					displayMoves: game.moves,
					moves: PgnConverter(game.moves),
					correctRating: game.whiteelo,
					correctArray: [...state.correctArray, game.whiteelo],
					result: game.result,
				},
			});
		};
		inputRef.current.clear();
		getGame().catch((error) => console.log(error));
	}, [state.round]);

	return (
		<ScrollView
			scrollEnabled={false}
			style={{ backgroundColor: 'rgba(5,5,5,0.90)' }}
			keyboardShouldPersistTaps="handled"
		>
			<View style={Styles.container}>
				<AnsweredModal nav={navigation} state={state} dispatch={dispatch} />
				<GoBack nav={navigation} />
				<Text style={Styles.indextext}>{state.round}/3</Text>
				<TextInput
					ref={inputRef}
					style={Styles.inputfield}
					editable
					placeholder="Your guess"
					placeholderTextColor={'#E5E5E551'}
					keyboardType="numeric"
					maxLength={4}
					onChangeText={(text) => dispatch({ type: 'setinput', payload: text })}
					value={state.input}
				></TextInput>
				<TouchableOpacity
					onPress={() => {
						isNaN(parseInt(state.input))
							? alert('Please enter guess')
							: dispatch({ type: 'setmodalvisible', payload: true }),
							Keyboard.dismiss();
					}}
					style={Styles.submitbtn}
				>
					<Text style={Styles.btntext}>Submit</Text>
				</TouchableOpacity>
				<View style={Styles.board}>
					<Chessboard
						ref={chessboardRef}
						durations={{ move: 150 }}
						boardSize={340}
						gestureEnabled={false}
						colors={{ black: '#B7C0D8', white: '#E8EDF9' }}
					/>
				</View>
				<HorizontalPgnScroller moves={state.displayMoves} />
				<View style={Styles.buttonContainer}>
					<ResetBoard board={chessboardRef} dispatch={dispatch} />
					<PreviousMove
						board={chessboardRef}
						state={state}
						dispatch={dispatch}
					/>
					<NextMove board={chessboardRef} state={state} dispatch={dispatch} />
					<AutoPlayMoves state={state} />
				</View>
			</View>
		</ScrollView>
	);
};
