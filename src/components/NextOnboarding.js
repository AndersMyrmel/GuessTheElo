import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const NextOnboarding = ({ scrollTo }) => {
	return (
		<View style={Styles.container}>
			<TouchableOpacity onPress={scrollTo} style={Styles.button}>
				<Text style={Styles.next}>Next</Text>
			</TouchableOpacity>
		</View>
	);
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	button: {
		width: 140,
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
	},
	next: {
		fontSize: 16,
		fontFamily: 'Poppins-Medium',
		color: '#000000',
	},
});
