import { useEffect, useReducer, useRef, useState } from 'react';
import {
	View,
	ScrollView,
	TouchableOpacity,
	Text,
	TextInput,
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
} from '../../components/Index';

export const Play = ({ navigation }) => {
	const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);
	const [input, setInput] = useState('');
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
		<ScrollView
			scrollEnabled={false}
			style={{ backgroundColor: 'rgba(5,5,5,0.90)' }}
		>
			<View style={Styles.container}>
				<GoBack nav={navigation} />
				<Text style={Styles.indextext}>1/3</Text>
				<TextInput
					style={Styles.inputfield}
					editable
					placeholder="Enter guess here"
					placeholderTextColor={'#E5E5E551'}
					keyboardType="numeric"
					maxLength={4}
					onChangeText={(text) => setInput(text)}
					value={input}
				></TextInput>
				<TouchableOpacity style={Styles.submitbtn}>
					<Text style={Styles.btntext}>Submit</Text>
				</TouchableOpacity>
				<View style={Styles.board}>
					<Chessboard
						ref={chessboardRef}
						durations={{ move: 150 }}
						boardSize={340}
						colors={{ black: '#B7C0D8', white: '#E8EDF9' }}
					/>
				</View>
				<View style={Styles.buttonContainer}>
					<ResetBoard board={chessboardRef} dispatch={dispatch} />
					<PreviousMove
						board={chessboardRef}
						state={state}
						dispatch={dispatch}
					/>
					<NextMove board={chessboardRef} state={state} dispatch={dispatch} />
					<AutoPlayMoves />
				</View>
			</View>
		</ScrollView>
	);
};
