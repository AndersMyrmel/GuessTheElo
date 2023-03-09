import { View, Text, StyleSheet } from 'react-native';
import { ScoreBar } from './ScoreBar';

export const RoundResult = ({ round, score }) => {
	return (
		<View style={Styles.section}>
			<Text style={Styles.roundtext}>Round {round}</Text>
			<Text style={Styles.subtext}>Your guess: 1421</Text>
			<View style={Styles.textcontainer}>
				<Text style={Styles.subtext}>Corect rating: 1734</Text>
				<Text style={[Styles.scoretext]}>Score: 313</Text>
			</View>
			<ScoreBar score={score} />
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
