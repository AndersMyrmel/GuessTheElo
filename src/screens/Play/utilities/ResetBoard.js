import { TouchableOpacity, Image } from 'react-native';

export const ResetBoard = ({ board, dispatch }) => {
	const reset = async () => {
		try {
			await board.current?.resetBoard(
				'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
			);
			dispatch({ type: 'setcount', payload: 0 });
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<TouchableOpacity onPress={reset} style={{ left: 10 }}>
			<Image
				style={{ width: 47, height: 47 }}
				source={require('../../../assets/images/reset-button.png')}
			/>
		</TouchableOpacity>
	);
};
