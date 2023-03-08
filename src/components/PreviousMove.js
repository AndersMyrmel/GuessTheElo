import { TouchableOpacity, Image } from 'react-native';

export const PreviousMove = ({ board, state, dispatch }) => {
	const previous = async () => {
		try {
			await board.current?.resetBoard(state.fenArray[state.count - 1]);
			dispatch({ type: 'setcount', payload: state.count - 1 });
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<TouchableOpacity onPress={previous}>
			<Image
				style={{ width: 47, height: 47 }}
				source={require('../assets/images/back-button.png')}
			/>
		</TouchableOpacity>
	);
};
