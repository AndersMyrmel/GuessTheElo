import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'rgba(5,5,5,0.90)',
		color: '#43ca83',
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		position: 'absolute',
		top: 529,
		marginTop: 20,
		marginHorizontal: 20,
		width: 324,
	},
	arrowback: {
		zIndex: 1,
		position: 'absolute',
		left: 25,
		top: 80,
	},
	guessbtn: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#FCFCFC',
		marginBottom: 10,
		width: 341,
		height: 55,
		borderRadius: 5,
		top: 690,
		position: 'absolute',
	},
	btntext: {
		fontSize: 16,
		color: '#0A0A0A',
		fontFamily: 'Poppins-Medium',
	},
	board: {
		position: 'absolute',
		top: 154,
	},
	inputfield: {
		borderBottomColor: '#E5E5E551',
		borderBottomWidth: 2,
		width: 330,
		position: 'absolute',
		top: 648,
		color: '#E5E5E551',
		fontFamily: 'Roboto-Medium',
		fontSize: 14,
		paddingBottom: 10,
	},
});
