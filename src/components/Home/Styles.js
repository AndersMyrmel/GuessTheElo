import { StyleSheet } from 'react-native';

export const Styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1d1d1d',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	button: {
		alignItems: 'center',
		justifyContent: 'center',
		paddingVertical: 12,
		paddingHorizontal: 32,
		borderRadius: 4,
		elevation: 3,
		backgroundColor: 'black',
		marginBottom: 10,
		width: 150,
		top: 20,
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: '#ffff',
	},
	logo: {
		width: 275,
		height: 275,
		resizeMode: 'contain',
		bottom: 50,
	},
});
