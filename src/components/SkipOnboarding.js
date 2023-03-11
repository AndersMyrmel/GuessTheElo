import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const SkipOnboarding = ({ skipScroll }) => {
	return (
		<View style={Styles.container}>
			<TouchableOpacity onPress={skipScroll} style={Styles.button}>
				<Text style={Styles.skip}>Skip</Text>
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
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: '#000000',
		shadowOffset: {
			width: 0,
			height: 4,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		borderColor: '#FCFCFC',
		borderWidth: 1,
	},
	skip: {
		fontSize: 16,
		fontFamily: 'Poppins-Medium',
		color: '#FCFCFC',
	},
});
