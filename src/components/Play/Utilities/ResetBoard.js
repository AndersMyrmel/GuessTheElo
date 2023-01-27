import { Button } from 'react-native';

export const ResetBoard = ({ board, state, dispatch }) => {
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

	return <Button title="Reset" onPress={reset} />;
};
