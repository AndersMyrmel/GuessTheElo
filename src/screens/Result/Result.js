import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { Styles } from './Styles';
import { GoBack } from '../../components/GoBack';
import { RoundResult } from '../../components/RoundResult';

export const Result = ({ route, navigation }) => {
	const { guesses, correctAnswers } = route.params;
	const numeric = ['one', 'two', 'three'];

	return (
		<SafeAreaView style={Styles.container}>
			<Text style={Styles.headertext}>Result</Text>
			<Text style={Styles.titletext}>Well Done</Text>
			<Text style={Styles.totaltext}>
				You scored a total of{' '}
				{guesses
					.map((val, idx) => {
						return val > correctAnswers[idx]
							? val - correctAnswers[idx]
							: correctAnswers[idx] - val;
					})
					.reduce((a, b) => a + b, 0)}{' '}
				points
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
			<TouchableOpacity
				style={Styles.finishbtn}
				onPress={() => {
					console.log(guesses), navigation.navigate('Home');
				}}
			>
				<Text style={Styles.btntext}>Finish</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
