import {
	View,
	SafeAreaView,
	Text,
	TouchableOpacity,
	Image,
} from 'react-native';
import { Styles } from './Styles';

export const Home = ({ navigation }) => {
	return (
		<SafeAreaView style={Styles.container}>
			<TouchableOpacity
				style={Styles.leaderboardicon}
				onPress={() => navigation.navigate('Result')}
			>
				<Image
					style={{ width: 32, height: 32 }}
					source={require('../../assets/images/leaderboard-icon.png')}
				/>
			</TouchableOpacity>
			<Image
				style={Styles.settingsicon}
				source={require('../../assets/images/settings-icon.png')}
			/>
			<Text style={Styles.titletext}>Guess The Elo</Text>
			<Text style={Styles.subtext}>Put your chess knowledge to the test</Text>
			<Image
				style={Styles.homeimage}
				source={require('../../assets/images/home-graphic.png')}
			/>
			<TouchableOpacity
				style={Styles.playbtn}
				onPress={() => navigation.navigate('Play')}
			>
				<Text style={Styles.btntext}>Play</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
