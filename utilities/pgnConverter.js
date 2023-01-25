import { Chess } from 'chess.js';

export const pgnConverter = (pgn) => {
	const chess = new Chess();
	chess.loadPgn(pgn);
	const moveHistory = chess.history({ verbose: true });
	let result = [];
	let i = 1;

	while (moveHistory.length > 0) {
		let p1Move = moveHistory.shift(),
			p2Move = moveHistory.shift();
		if (p1Move) {
			result.push({ from: p1Move.from, to: p1Move.to });
		}
		if (p2Move) {
			result.push({ from: p2Move.from, to: p2Move.to });
		}
		i++;
	}
	return result;
};
