import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './components/Home';
import { Play } from './components/Play';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={Home} />
				<Stack.Screen name="Play" component={Play} />
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
