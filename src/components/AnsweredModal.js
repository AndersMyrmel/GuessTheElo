import {
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from 'react-native';

export const AnsweredModal = ({ isVisible, dispatch }) => {
	return (
		<View style={Styles.centeredView}>
			<Modal
				animationType="slide"
				transparent={true}
				visible={isVisible}
				onRequestClose={() => {
					dispatch({
						type: 'setmodalvisible',
						payload: !isVisible,
					});
					//setVisible(!isVisible);
				}}
			>
				<View style={Styles.centeredView}>
					<View style={Styles.modalView}>
						<Image
							source={require('../assets/images/success-icon.png')}
							style={Styles.icon}
						></Image>
						<Text style={Styles.titletext}>Succesfully answered!</Text>
						<Text style={Styles.subtext}>Your guess: 1421</Text>
						<Text style={Styles.subtext}>Correct rating: 1734</Text>
						<TouchableOpacity
							onPress={() =>
								dispatch({
									type: 'setmodalvisible',
									payload: !isVisible,
								})
							}
							style={Styles.continuebtn}
						>
							<Text style={Styles.btntext}>Continue</Text>
						</TouchableOpacity>
					</View>
				</View>
			</Modal>
		</View>
	);
};

const Styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 8,
		padding: 35,
		alignItems: 'center',
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.75,
		shadowRadius: 5,
		elevation: 5,
		width: 344,
		height: 214,
	},
	icon: {
		width: 48,
		height: 48,
		bottom: 25,
	},
	titletext: {
		fontFamily: 'Poppins-SemiBold',
		color: '#050505',
		fontSize: 20,
		paddingBottom: 10,
		bottom: 18,
	},
	subtext: {
		fontFamily: 'Poppins-Medium',
		color: '#515152',
		fontSize: 14,
		bottom: 22,
	},
	continuebtn: {
		alignItems: 'center',
		justifyContent: 'center',
		borderRadius: 4,
		elevation: 3,
		backgroundColor: '#050505',
		width: 244,
		height: 44,
		borderRadius: 8,
		bottom: 5,
	},
	btntext: {
		fontSize: 14,
		color: '#F5F5F5',
		fontFamily: 'Poppins-Medium',
	},
});
