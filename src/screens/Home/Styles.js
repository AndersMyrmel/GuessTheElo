import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'rgba(5,5,5,0.90)',
		alignItems: 'center',
	},
	leaderboardicon: {
		width: 30,
		height: 30,
		position: 'absolute',
		left: 25,
		top: 80,
	},
	settingsicon: {
		width: 30,
		height: 30,
		position: 'absolute',
		left: 316,
		top: 80,
	},
	playbtn: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#FCFCFC',
		marginBottom: 10,
		width: 308,
		height: 54,
		borderRadius: 5,
		top: 690,
		position: 'absolute',
	},
	btntext: {
		fontSize: 18,
		color: '#000000',
		fontFamily: 'Poppins-Medium',
	},
	titletext: {
		fontSize: 35,
		color: '#FFFFFF',
		fontFamily: 'Alegreya-Medium',
		top: 182,
		position: 'absolute',
	},
	subtext: {
		fontSize: 20,
		color: '#FFFFFF50',
		paddingHorizontal: 20,
		top: 230,
		fontFamily: 'Alegreya-Regular',
		position: 'absolute',
		textAlign: 'center',
	},
	homeimage: {
		width: 392,
		height: 392,
		top: 220,
		position: 'absolute',
	},
});
