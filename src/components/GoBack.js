import { Image, TouchableOpacity, StyleSheet } from 'react-native';

export const GoBack = ({ nav }) => {
	return (
		<TouchableOpacity
			style={Styles.arrowback}
			onPress={() => nav.navigate('Home')}
		>
			<Image
				style={{ width: 32, height: 32 }}
				source={require('../assets/images/arrow-back.png')}
			/>
		</TouchableOpacity>
	);
};

const Styles = StyleSheet.create({
	arrowback: {
		zIndex: 1,
		position: 'absolute',
		left: 25,
		top: 80,
	},
});
