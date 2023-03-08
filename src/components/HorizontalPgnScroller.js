import { ScrollView, Text, StyleSheet } from 'react-native';

export const HorizontalPgnScroller = ({ moves }) => {
	return (
		<ScrollView
			horizontal={true}
			showsHorizontalScrollIndicator={false}
			style={Styles.movelist}
		>
			<Text style={Styles.movestext}>{moves}</Text>
		</ScrollView>
	);
};

const Styles = StyleSheet.create({
	movelist: {
		width: 336,
		height: 24,
		position: 'absolute',
		top: 647,
		backgroundColor: '#DADADA12',
		borderRadius: 13,
		borderWidth: 1,
		borderColor: '#E5E5E525',
	},
	movestext: {
		color: '#C4C4C4',
		fontSize: 11,
		paddingHorizontal: 10,
		fontFamily: 'Roboto-Medium',
		alignSelf: 'center',
	},
});
