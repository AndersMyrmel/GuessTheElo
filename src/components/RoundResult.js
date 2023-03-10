import { View, Text, StyleSheet } from 'react-native';
import { ScoreBar } from './ScoreBar';

export const RoundResult = ({ round, guess, answer }) => {
	const getScore = (guess, answer) => {
		return guess > answer ? guess - answer : answer - guess;
	};

	return (
		<View style={Styles.section}>
			<Text style={Styles.roundtext}>Round {round}</Text>
			<Text style={Styles.subtext}>Your guess: {guess}</Text>
			<View style={Styles.textcontainer}>
				<Text style={Styles.subtext}>Corect rating: {answer}</Text>
				<Text style={[Styles.scoretext]}>Score: {getScore(guess, answer)}</Text>
			</View>
			<ScoreBar score={2000 - getScore(guess, answer)} />
		</View>
	);
};

const Styles = StyleSheet.create({
	section: {
		width: 310,
		height: 122,
	},
	textcontainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	roundtext: {
		fontFamily: 'Poppins-SemiBold',
		fontSize: 18,
		color: '#FFFFFF',
	},
	subtext: {
		fontFamily: 'Poppins-Regular',
		fontSize: 14,
		color: '#8B9095',
		left: 2,
	},
	scoretext: {
		fontFamily: 'Poppins-Regular',
		fontSize: 14,
		color: '#8B9095',
		paddingRight: 2,
	},
});
