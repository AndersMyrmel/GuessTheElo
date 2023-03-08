import { Image, TouchableOpacity } from 'react-native';

export const SkipMoves = () => {
	return (
		<TouchableOpacity style={{ right: 10 }}>
			<Image
				style={{ width: 47, height: 47 }}
				source={require('../../../assets/images/skip-forward-button.png')}
			/>
		</TouchableOpacity>
	);
};
