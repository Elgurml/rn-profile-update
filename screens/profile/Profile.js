import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/UI/HeaderButton";

const Profile = props => {
	return (
		<View style={styles.screen}>
			<Image
				style={styles.image}
				source={{
					uri:
						"https://images.unsplash.com/photo-1516328432920-123fae55f0f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
				}}
			/>
			<View style={styles.idCard}>
				<Text style={styles.id}>Tarja</Text>
				<Text style={styles.id}>Turunen</Text>
				<Text style={styles.description}>
					I like breathing the fresh air of the fjords, it makes me
					feel alive !
				</Text>
				<View style={styles.location}>
					<Text style={styles.label}>I am from:</Text>
					<Text style={styles.home}>Lofoten Islands</Text>
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
