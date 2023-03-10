export const INITIAL_STATE = {
	count: 0,
	fenArray: [],
	moves: null,
	displayMoves: null,
	input: null,
	modalVisible: false,
	round: 1,
	correctRating: -1,
	result: null,
	guessesArray: [],
	correctArray: [],
};

export const GameReducer = (state, action) => {
	switch (action.type) {
		case 'setcount':
			return {
				...state,
				count: action.payload,
			};
		case 'setfen':
			return {
				...state,
				fenArray: [...state.fenArray, action.payload],
			};
		case 'setmoves':
			return {
				...state,
				moves: action.payload,
			};
		case 'setdisplaymoves':
			return {
				...state,
				displayMoves: action.payload,
			};
		case 'setinput':
			return {
				...state,
				input: action.payload,
			};
		case 'setmodalvisible':
			return {
				...state,
				modalVisible: action.payload,
			};
		case 'setround':
			return {
				...state,
				round: action.payload,
			};
		case 'setcorrectrating':
			return {
				...state,
				correctRating: action.payload,
			};
		case 'setresult':
			return {
				...state,
				result: action.payload,
			};
		case 'setguessesarray':
			return {
				...state,
				guessesArray: [...state.guessesArray, action.payload],
			};
		case 'setcorrectarray':
			return {
				...state,
				correctArray: [...state.correctArray, action.payload],
			};
		case 'setmultiple':
			return {
				...state,
				...action.payload,
			};
		default:
			return state;
	}
};
