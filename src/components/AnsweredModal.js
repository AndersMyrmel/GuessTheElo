import { useEffect, useState } from 'react';
import {
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from 'react-native';

export const AnsweredModal = ({ nav, state, dispatch }) => {
	const [ready, setReady] = useState(false);

	useEffect(() => {
		if (ready) {
			nav.navigate('Result', {
				guesses: state.guessesArray,
				correctAnswers: state.correctArray,
			});
		}
	}, [ready]);

	const nextRound = () => {
		if (state.round >= 3) {
			dispatch({
				type: 'setmultiple',
				payload: {
					guessesArray: [...state.guessesArray, parseInt(state.input)],
					modalVisible: !state.modalVisible,
				},
			});
			return setReady(true);
		}
		dispatch({
			type: 'setmultiple',
			payload: {
				guessesArray: [...state.guessesArray, parseInt(state.input)],
				modalVisible: !state.modalVisible,
				round: state.round + 1,
			},
		});
	};

	return (
		<View style={Styles.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={state.modalVisible}
			>
				<View style={Styles.centeredView}>
					<View style={Styles.modalView}>
						<Image
							source={require('../assets/images/success-icon.png')}
							style={Styles.icon}
						></Image>
						<Text style={Styles.titletext}>Round completed!</Text>
						<Text style={Styles.subtext}>Your guess: {state.input}</Text>
						<Text style={Styles.subtext}>
							Correct rating: {state.correctRating}
						</Text>
						<TouchableOpacity
							onPress={() => nextRound()}
							style={Styles.continuebtn}
						>
							{state.round <= 2 ? (
								<Text style={Styles.btntext}>Next round</Text>
							) : (
								<Text style={Styles.btntext}>Summary</Text>
							)}
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const Styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.75,
		shadowRadius: 5,
		elevation: 5,
		width: 344,
		height: 214,
	},
	icon: {
		width: 48,
		height: 48,
		bottom: 25,
	},
	titletext: {
		fontFamily: 'Poppins-SemiBold',
		color: '#050505',
		fontSize: 20,
		paddingBottom: 10,
		bottom: 18,
	},
	subtext: {
		fontFamily: 'Poppins-Medium',
		color: '#515152',
		fontSize: 14,
		bottom: 22,
	},
	continuebtn: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#050505',
		width: 244,
		height: 44,
		borderRadius: 8,
		bottom: 5,
	},
	btntext: {
		fontSize: 14,
		color: '#F5F5F5',
		fontFamily: 'Poppins-Medium',
	},
});
