import { useState, useEffect } from 'react';
import { TextInput, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Styles } from './Styles';
import { GoBack } from '../../components/GoBack';

export const Settings = ({ navigation }) => {
	const [value, setValue] = useState('');
	const [username, setUsername] = useState('');

	useEffect(() => {
		const getUsername = async () => {
			let username = await AsyncStorage.getItem('@username');
			setUsername(username);
		};
		getUsername();
	}, []);

	return (
		<SafeAreaView
			style={Styles.container}
			scrollEnabled={false}
			keyboardShouldPersistTaps="handled"
		>
			<GoBack nav={navigation} />
			<Text style={Styles.headertext}>Settings</Text>
			<Text style={Styles.titletext}>Edit Profile</Text>
			<Text style={Styles.subtext}>
				Change your username. Your username is displayed in the leaderboard.
			</Text>
			<TextInput
				style={Styles.inputfield}
				editable
				placeholder={username}
				placeholderTextColor={'#757A86'}
				onChangeText={(text) => setValue(text)}
				value={value}
			></TextInput>
			<TouchableOpacity
				style={Styles.submitbtn}
				onPress={() => {
					navigation.navigate('Home');
				}}
			>
				<Text style={Styles.btntext}>Submit</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
