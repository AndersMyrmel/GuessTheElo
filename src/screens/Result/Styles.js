import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(5,5,5,0.90)',
	},
	headertext: {
		fontSize: 20,
		color: '#FFFFFF',
		fontFamily: 'Poppins-SemiBold',
		top: 80,
		position: 'absolute',
	},
	titletext: {
		fontSize: 24,
		color: '#FFFFFF',
		fontFamily: 'Poppins-SemiBold',
		top: 163,
		left: 30,
		position: 'absolute',
	},
	totaltext: {
		fontSize: 15,
		color: '#525A64',
		top: 195,
		left: 30,
		fontFamily: 'Poppins-Regular',
		position: 'absolute',
	},
	finishbtn: {
		alignItems: 'center',
		justifyContent: 'center',
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
		color: '#0A0A0A',
		fontFamily: 'Poppins-Medium',
	},
});
