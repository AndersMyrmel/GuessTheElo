import { useEffect, useReducer, useRef, useState } from 'react';
import { View, Image, TouchableOpacity, Text, TextInput } from 'react-native';
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
	SkipMoves,
	GameConverter,
} from './utilities/Index';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export const Play = ({ navigation }) => {
	const [state, dispatch] = useReducer(GameReducer, INITIAL_STATE);
	const [value, onChangeText] = useState('Enter guess here');
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
			<TouchableOpacity
				style={Styles.arrowback}
				onPress={() => navigation.navigate('Home')}
			>
				<Image
					style={{ width: 32, height: 32 }}
					source={require('../../assets/images/arrow-back.png')}
				/>
			</TouchableOpacity>
			<View style={Styles.board}>
				<Chessboard
					ref={chessboardRef}
					durations={{ move: 150 }}
					boardSize={340}
				/>
			</View>
			<View style={Styles.buttonContainer}>
				<ResetBoard board={chessboardRef} dispatch={dispatch} />
				<PreviousMove board={chessboardRef} state={state} dispatch={dispatch} />
				<NextMove board={chessboardRef} state={state} dispatch={dispatch} />
				<SkipMoves />
			</View>
			<TextInput
				style={Styles.inputfield}
				editable
				onChangeText={(text) => onChangeText(text)}
				value={value}
			></TextInput>
			<TouchableOpacity style={Styles.guessbtn}>
				<Text style={Styles.btntext}>Guess</Text>
			</TouchableOpacity>
		</View>
	);
};
