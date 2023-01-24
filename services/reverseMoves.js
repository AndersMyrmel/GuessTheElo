//export const reverseMoves = (arr) => {
//	arr.forEach((e) => swap(e, 'from', 'to'));
//};

export const swap = (obj, key1, key2) => {
	[obj[key1], obj[key2]] = [obj[key2], obj[key1]];
};
