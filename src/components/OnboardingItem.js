import {
	View,
	Text,
	StyleSheet,
	Image,
	useWindowDimensions,
} from 'react-native';

export const OnboardingItem = ({ item }) => {
	const { width } = useWindowDimensions();

	return (
		<View style={[Styles.container, { width }]}>
			<Image
				source={item.image}
				style={[Styles.image, { width, resizeMode: 'contain' }]}
			/>
			<View style={{ flex: 0.3 }}>
				<Text style={Styles.title}>{item.title}</Text>
				<Text style={Styles.description}>{item.description}</Text>
			</View>
		</View>
	);
};

const Styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	image: {
		flex: 0.45,
		justifyContent: 'center',
		marginTop: 40,
		marginBottom: 40,
	},
	title: {
		fontSize: 20,
		fontFamily: 'Poppins-Bold',
		color: '#FFFFFF',
		textAlign: 'center',
		marginBottom: 10,
	},
	description: {
		fontSize: 18,
		fontFamily: 'Poppins-Regular',
		fontWeight: '300',
		color: '#FCFCFC',
		textAlign: 'center',
		paddingHorizontal: 32,
	},
});
