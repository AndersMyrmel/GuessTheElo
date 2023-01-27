export const INITIAL_STATE = {
	count: 0,
	fenArray: [],
	moves: null,
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
		default:
			return state;
	}
};
