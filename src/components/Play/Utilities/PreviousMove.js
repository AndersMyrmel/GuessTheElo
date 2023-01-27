import { Button } from 'react-native';

export const PreviousMove = ({ board, fenArr, setCount, count }) => {
	const previous = async () => {
		try {
			await board.current?.resetBoard(fenArr[count - 1]);
			setCount(count - 1);
		} catch (e) {
			console.log(e);
		}
	};

	return <Button title="Previous Move" onPress={previous} />;
};
