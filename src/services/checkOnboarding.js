import AsyncStorage from '@react-native-async-storage/async-storage';

export const checkOnboarding = async (setViewedOnboarding, setLoading) => {
	try {
		const value = await AsyncStorage.getItem('@viewedOnboarding');

		if (value != null) {
			setViewedOnboarding(true);
		}
	} catch (error) {
	} finally {
		setLoading(false);
	}
};
