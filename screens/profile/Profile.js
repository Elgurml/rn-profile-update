import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux"

import CustomHeaderButton from "../../components/UI/HeaderButton";

const Profile = props => {
const myProfile = useSelector(state => state.profile.profile)

	return (
		<View style={styles.screen}>
			<Image
				style={styles.image}
				source={{uri: myProfile.myPictureUrl}}
			/>
			<View style={styles.idCard}>
				<Text style={styles.id}>{myProfile.firstname}</Text>
				<Text style={styles.id}>{myProfile.lastname}</Text>
				<Text style={styles.description}>{myProfile.description}</Text>
				<View style={styles.location}>
					<Text style={styles.label}>I am from:</Text>
					<Text style={styles.home}>{myProfile.location}</Text>
				</View>
			</View>
		</View>
	);
};

Profile.navigationOptions = navData => {
	return {
		headerTitle: "Your Profile",
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Cart"
					iconName={
						Platform.OS === "android" ? "md-create" : "ios-create"
					}
					onPress={() => {
						navData.navigation.navigate("ProfileEdit");
					}}
				/>
			</HeaderButtons>
		)
	};
};

export default Profile;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		alignItems: "center"
	},
	image: {
		width: "100%",
		height: "40%",
		borderBottomLeftRadius: 20,
		borderBottomRightRadius: 20
	},
	idCard: {
		position: "absolute",
		top: "35%",
		height: "50%",
		marginHorizontal: 40,
		padding: 10,
		shadowColor: "black",
		shadowOpacity: 0.6,
		shadowOffset: { width: 0, height: 20 },
		shadowRadius: 8,
		elevation: 5,
		borderRadius: 10,
		backgroundColor: "white"
	},
	id: {
		fontFamily: "barlow-bold",
		fontSize: 25,
		textAlign: "center"
	},
	description: {
		fontFamily: "barlow",
		margin: 20
    },
    location: {
        margin: 20,
    },
	home: {
		fontFamily: "barlow",
		marginLeft: 20,
		color: "#ccc"
	}
});
