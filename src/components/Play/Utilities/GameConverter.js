import { Game } from './Game.js';

export const GameConverter = {
	fromFirestore: (snapshot, options) => {
		const data = snapshot.data(options);
		return new Game(
			data.White,
			data.Black,
			data.Result,
			data.Whiteelo,
			data.Blackelo,
			data.Moves
		);
	},
};
