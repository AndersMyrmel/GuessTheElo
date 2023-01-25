import { StyleSheet, Text, View, Pressable } from 'react-native';

export default function HomeScreen({ navigation }) {
	return (
		<View style={styles.container}>
			<Pressable
				style={styles.button}
				onPress={() => navigation.navigate('Play')}
			>
				<Text style={styles.text}>PLAY</Text>
			</Pressable>
		</View>
	);
}

const styles = StyleSheet.create({
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
	},
	text: {
		fontSize: 16,
		lineHeight: 21,
		fontWeight: 'bold',
		letterSpacing: 0.25,
		color: '#43ca83',
	},
});
