import { Text, View, Pressable } from 'react-native';
import { Styles } from './Styles';

export const Home = ({ navigation }) => {
	return (
		<View style={Styles.container}>
			<Pressable
				style={Styles.button}
				onPress={() => navigation.navigate('Play')}
			>
				<Text style={Styles.text}>PLAY</Text>
			</Pressable>
		</View>
	);
};
