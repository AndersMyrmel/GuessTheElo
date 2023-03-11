import { useState, useRef } from 'react';
import {
	View,
	TextInput,
	FlatList,
	Animated,
	KeyboardAvoidingView,
	TouchableOpacity,
	Text,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Styles } from './Styles';
import {
	OnboardingItem,
	Paginator,
	NextOnboarding,
	SkipOnboarding,
} from '../../components/Index';
import slides from '../../../slides';

export const Onboarding = ({ navigation }) => {
	const [username, setUsername] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;

	const scrollTo = async () => {
		if (currentIndex < slides.length - 1)
			slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
	};

	const skipScroll = async () => {
		if (currentIndex < slides.length - 1) slidesRef.current.scrollToEnd();
	};

	const setOnboarding = async () => {
		try {
			await AsyncStorage.setItem('@viewedOnboarding', 'true');
		} catch (error) {
		} finally {
			navigation.replace('Home');
		}
	};

	return (
		<KeyboardAvoidingView style={Styles.container} behavior={'position'}>
			<View style={{ flex: 3 }}>
				<FlatList
					data={slides}
					renderItem={({ item }) => <OnboardingItem item={item} />}
					horizontal
					showsHorizontalScrollIndicator={false}
					pagingEnabled
					bounces={false}
					keyExtractor={(item) => item.id}
					onScroll={Animated.event(
						[{ nativeEvent: { contentOffset: { x: scrollX } } }],
						{ useNativeDriver: false }
					)}
					scrollEventThrottle={32}
					onViewableItemsChanged={viewableItemsChanged}
					viewabilityConfig={viewConfig}
					ref={slidesRef}
				/>
			</View>
			<Paginator data={slides} scrollX={scrollX} />
			{currentIndex == 2 ? (
				<View style={{ flex: 0.6, alignItems: 'center' }}>
					<TextInput
						style={Styles.inputfield}
						editable
						placeholder="Username"
						placeholderTextColor={'#E5E5E571'}
						onChangeText={(text) => setUsername(text)}
						value={username}
					></TextInput>
					<TouchableOpacity
						onPress={setOnboarding}
						style={Styles.getstartedbtn}
					>
						<Text style={Styles.getstarted}>Get started</Text>
					</TouchableOpacity>
				</View>
			) : (
				<View style={Styles.buttoncontainer}>
					<SkipOnboarding skipScroll={skipScroll} />
					<NextOnboarding scrollTo={scrollTo} />
				</View>
			)}
		</KeyboardAvoidingView>
	);
};
