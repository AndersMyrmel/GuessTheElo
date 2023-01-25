import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import PlayScreen from './screens/PlayScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="Play" component={PlayScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#1d1d1d',
		color: '#43ca83',
		alignItems: 'center',
		justifyContent: 'center',
		textAlign: 'center',
	},
	buttonContainer: {
		width: '100%',
		textAlign: 'center',
		flexDirection: 'row',
	},
	button: {
		display: 'inline-block',
	},
});
