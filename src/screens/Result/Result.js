import { View, SafeAreaView, Text, TouchableOpacity } from 'react-native';
import { GoBack } from '../../components/GoBack';
import { RoundResult } from '../../components/RoundResult';
import { Styles } from './Styles';

export const Result = ({ navigation }) => {
	return (
		<SafeAreaView style={Styles.container}>
			<GoBack nav={navigation} />
			<Text style={Styles.headertext}>Result</Text>
			<Text style={Styles.titletext}>Well Done</Text>
			<Text style={Styles.totaltext}>You scored a total of 871 points</Text>

			<View style={{ marginTop: 80 }}>
				<RoundResult round={'one'} score={40} />
				<RoundResult round={'two'} score={66} />
				<RoundResult round={'three'} score={100} />
			</View>

			<TouchableOpacity
				style={Styles.continuebtn}
				onPress={() => navigation.navigate('Home')}
			>
				<Text style={Styles.btntext}>Continue</Text>
			</TouchableOpacity>
		</SafeAreaView>
	);
};
