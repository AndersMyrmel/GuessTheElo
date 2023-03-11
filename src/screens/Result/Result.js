import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';
import { RoundResult } from '../../components/RoundResult';

export const Result = ({ route, navigation }) => {
	const { guesses, correctAnswers } = route.params;
	const numeric = ['one', 'two', 'three'];
	const totalScore = calculateScore(guesses, correctAnswers);

	function calculateScore(guesses, answers) {
		return guesses
			.map((val, idx) => {
				return val > answers[idx] ? val - answers[idx] : answers[idx] - val;
			})
			.reduce((a, b) => a + b, 0);
	}

	const finishGame = async () => {
		let user = await AsyncStorage.getItem('@username');

		await addDoc(collection(db, 'leaderboard'), {
			username: user,
			score: totalScore,
			date: Timestamp.now(),
		});
		navigation.navigate('Home');
	};

	return (
		<SafeAreaView style={Styles.container}>
			<Text style={Styles.headertext}>Result</Text>
			<Text style={Styles.titletext}>Well Done</Text>
			<Text style={Styles.totaltext}>
				You scored a total of {totalScore} points
			</Text>
			<View style={{ marginTop: 80 }}>
				{numeric.map((num, idx) => (
					<RoundResult
						round={num}
						guess={guesses[idx]}
						answer={correctAnswers[idx]}
						key={idx}
					/>
				))}
			</View>
			<TouchableOpacity style={Styles.finishbtn} onPress={finishGame}>
				<Text style={Styles.btntext}>Finish</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
