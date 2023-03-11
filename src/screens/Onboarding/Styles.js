import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(5,5,5,0.90)',
	},
	buttoncontainer: {
		display: 'flex',
		flexDirection: 'row',
		flex: 0.6,
		alignItems: 'flex-start',
		justifyContent: 'center',
		paddingHorizontal: 30,
	},
	inputfield: {
		borderBottomColor: '#E5E5E571',
		borderBottomWidth: 2,
		width: 300,
		color: '#FCFCFC',
		fontFamily: 'Roboto-Medium',
		fontSize: 16,
		bottom: 60,
		paddingBottom: 10,
		alignSelf: 'center',
	},
	getstartedbtn: {
		width: 308,
		height: 54,
		borderRadius: 5,
		backgroundColor: '#FCFCFC',
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		bottom: 32,
	},
	getstarted: {
		fontSize: 18,
		fontFamily: 'Poppins-Medium',
		color: '#000000',
	},
});
