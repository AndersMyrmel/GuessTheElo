import { Button } from 'react-native';

export const PreviousMove = ({ board, state, dispatch }) => {
	const previous = async () => {
		try {
			await board.current?.resetBoard(state.fenArray[state.count - 1]);
			dispatch({ type: 'setcount', payload: state.count - 1 });
		} catch (e) {
			console.log(e);
		}
	};

	return <Button title="Previous Move" onPress={previous} />;
};
