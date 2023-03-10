import { useRef, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';

export const ScoreBar = ({ score }) => {
	const counter = useRef(new Animated.Value(0)).current;

	const width = counter.interpolate({
		inputRange: [0, 2000],
		outputRange: ['0%', '100%'],
		extrapolate: 'clamp',
	});

	const load = (percentage) => {
		Animated.timing(counter, {
			toValue: percentage,
			delay: 500,
			duration: 750,
			useNativeDriver: false,
		}).start();
	};

	useEffect(() => {
		load(score);
	}, []);

	return (
		<View style={Styles.progressBar}>
			<Animated.View
				style={
					([StyleSheet.absoluteFill],
					{ backgroundColor: '#00FFE0', borderRadius: 25, width })
				}
			></Animated.View>
		</View>
	);
};

Styles = StyleSheet.create({
	progressBar: {
		height: 37,
		flexDirection: 'row',
		width: '100%',
		backgroundColor: '#595959',
		marginTop: 4,
		borderRadius: 25,
	},
});
