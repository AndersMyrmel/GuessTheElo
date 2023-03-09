import { Image, TouchableOpacity } from 'react-native';

export const NextMove = ({ board, state, dispatch }) => {
	const next = async () => {
		if (state.fenArray.indexOf(board.current?.getState().fen) === -1) {
			dispatch({
				type: 'setfen',
				payload: board.current?.getState().fen,
			});
		}
		try {
			await board.current?.move(state.moves[state.count]);
			dispatch({ type: 'setcount', payload: state.count + 1 });
		} catch {
			alert(`Game over: ${state.result}`);
		}
	};

	return (
		<TouchableOpacity onPress={next}>
			<Image
				style={{ width: 47, height: 47 }}
				source={require('../assets/images/forward-button.png')}
			/>
		</TouchableOpacity>
	);
};
