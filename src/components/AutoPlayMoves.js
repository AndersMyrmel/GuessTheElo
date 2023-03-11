import { Image, TouchableOpacity } from 'react-native';

export const AutoPlayMoves = ({ state }) => {
	return (
		<TouchableOpacity
			style={{ right: 10 }}
			onPress={() => console.log(state.moves)}
		>
			<Image
				style={{ width: 47, height: 47 }}
				source={require('../assets/images/auto-play-button.png')}
			/>
		</TouchableOpacity>
	);
};
