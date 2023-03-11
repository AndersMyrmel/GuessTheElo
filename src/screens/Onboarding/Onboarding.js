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
import { Styles } from './Styles';
import { OnboardingItem } from '../../components/OnboardingItem';
import { Paginator } from '../../components/Paginator';
import { NextOnboarding } from '../../components/NextOnboarding';
import { SkipOnboarding } from '../../components/SkipOnboarding';
import slides from '../../../slides';

export const Onboarding = () => {
	const [username, setUsername] = useState('');
	const [currentIndex, setCurrentIndex] = useState(0);
	const scrollX = useRef(new Animated.Value(0)).current;
	const slidesRef = useRef(null);
	const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

	const viewableItemsChanged = useRef(({ viewableItems }) => {
		setCurrentIndex(viewableItems[0].index);
	}).current;

	const scrollTo = () => {
		if (currentIndex < slides.length - 1)
			slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
	};

	const skipScroll = () => {
		if (currentIndex < slides.length - 1) slidesRef.current.scrollToEnd();
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
					<TouchableOpacity style={Styles.getstartedbtn}>
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
