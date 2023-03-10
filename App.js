import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Home } from './src/screens/Home/Home';
import { Play } from './src/screens/Play/Play';
import { Result } from './src/screens/Result/Result';

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
	const [fontsLoaded] = useFonts({
		'Alegreya-Medium': require('./src/assets/fonts/Alegreya/Alegreya-Medium.ttf'),
		'Alegreya-Regular': require('./src/assets/fonts/Alegreya/Alegreya-Regular.ttf'),
		'Poppins-Regular': require('./src/assets/fonts/Poppins/Poppins-Regular.ttf'),
		'Poppins-Medium': require('./src/assets/fonts/Poppins/Poppins-Medium.ttf'),
		'Poppins-SemiBold': require('./src/assets/fonts/Poppins/Poppins-SemiBold.ttf'),
		'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
	});

	const onLayoutRootView = useCallback(async () => {
		if (fontsLoaded) {
			await SplashScreen.hideAsync();
		}
	}, [fontsLoaded]);

	if (!fontsLoaded) {
		return null;
	}

	return (
		<NavigationContainer onReady={onLayoutRootView}>
			<Stack.Navigator
				initialRouteName="Home"
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen
					name="Home"
					component={Home}
					options={{ gestureEnabled: false }}
				/>
				<Stack.Screen name="Play" component={Play} />
				<Stack.Screen
					name="Result"
					component={Result}
					options={{ gestureEnabled: false }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
}
