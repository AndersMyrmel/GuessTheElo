class Game {
	constructor(white, black, result, whiteelo, blackelo, moves) {
		this.white = white;
		this.black = black;
		this.result = result;
		this.whiteelo = whiteelo;
		this.blackelo = blackelo;
		this.moves = moves;
	}
}

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
