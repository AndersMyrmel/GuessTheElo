import { Button } from 'react-native';

export const NextMove = ({
	board,
	moves,
	setCount,
	count,
	fenArr,
	updateArr,
}) => {
	const next = async () => {
		if (fenArr.indexOf(board.current?.getState().fen) === -1) {
			updateArr((arr) => [...arr, board.current?.getState().fen]);
		}
		try {
			await board.current?.move(moves[count]);
			setCount(count + 1);
		} catch {
			alert('Game over');
		}
	};

	return <Button title="Next Move" onPress={next} />;
};
