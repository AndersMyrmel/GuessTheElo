import { Image, TouchableOpacity } from 'react-native';

export const AutoPlayMoves = () => {
	return (
		<TouchableOpacity style={{ right: 10 }}>
			<Image
				style={{ width: 53, height: 53 }}
				source={require('../assets/images/auto-play-button.png')}
			/>
		</TouchableOpacity>
	);
};
