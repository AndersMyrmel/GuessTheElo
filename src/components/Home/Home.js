import { Text, View, Pressable, Image } from 'react-native';
import { Styles } from './Styles';

export const Home = ({ navigation }) => {
	return (
		<View style={Styles.container}>
			<Image
				style={Styles.logo}
				source={require('../../assets/images/templogo.png')}
			/>
			<Pressable
				style={Styles.button}
				onPress={() => navigation.navigate('Play')}
			>
				<Text style={Styles.text}>PLAY</Text>
			</Pressable>
			<Pressable
				style={Styles.button}
				onPress={() => navigation.navigate('Hiscores')}
			>
				<Text style={Styles.text}>HISCORES</Text>
			</Pressable>
			<Pressable
				style={Styles.button}
				onPress={() => navigation.navigate('Settings')}
			>
				<Text style={Styles.text}>SETTINGS</Text>
			</Pressable>
		</View>
	);
};
