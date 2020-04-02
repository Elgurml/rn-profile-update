import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/UI/HeaderButton";
import { ScrollView, TextInput } from "react-native-gesture-handler";

const ProfileEdit = props => {
	const [myPictureUrl, setMyPictureUrl] = useState(
		"https://images.unsplash.com/photo-1516328432920-123fae55f0f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
	);
	const [firstname, setFirstname] = useState("Tarja");
	const [lastname, setLastname] = useState("Turunen");
	const [description, setDescription] = useState(
		"I like breathing the fresh air of the fjords, it makes me feel alive !"
	);
	const [location, setLocation] = useState("Lofoten Islands");

	const myPictureTextChangeHandler = text => {
		setMyPictureUrl(text);
    };
    
    const firstnameTextChangeHandler = text => {
        setFirstname(text)
    }

    const lastnameTextChangeHandler = text => {
        setLastname(text)
    }

    const descriptionTextChangeHandler = text => {
        setDescription(text)
    }

    const locationTextChangeHandler = text => {
        setLocation(text)
    }





	return (
		<ScrollView>
			<View style={styles.screen}>
				<View style={styles.formControl}>
					<Text style={styles.label}>Picture of me:</Text>
					<TextInput
						style={styles.input}
						value={myPictureUrl}
						onChangeText={myPictureTextChangeHandler}
                        returnKeyType="next"
					/>
				</View>
                <View style={styles.formControl}>
					<Text style={styles.label}>Firstname:</Text>
					<TextInput
						style={styles.input}
						value={firstname}
						onChangeText={firstnameTextChangeHandler}
                        returnKeyType="next"
					/>
				</View>
                <View style={styles.formControl}>
					<Text style={styles.label}>Lastname:</Text>
					<TextInput
						style={styles.input}
						value={lastname}
						onChangeText={lastnameTextChangeHandler}
                        returnKeyType="next"
					/>
				</View>
                <View style={styles.formControl}>
					<Text style={styles.label}>Description:</Text>
					<TextInput
						style={styles.input}
						value={description}
						onChangeText={descriptionTextChangeHandler}
                        returnKeyType="next"
					/>
				</View>
                <View style={styles.formControl}>
					<Text style={styles.label}>I live in:</Text>
					<TextInput
						style={styles.input}
						value={location}
						onChangeText={locationTextChangeHandler}
					/>
				</View>
			</View>
		</ScrollView>
	);
};

ProfileEdit.navigationOptions = navData => {
	return {
		headerTitle: "Edit Profile",
		headerRight: () => (
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Edit profile"
					iconName={
						Platform.OS === "android"
							? "md-checkmark"
							: "ios-checkmark"
					}
					onPress={() => {
						navData.navigation.navigate("ProfileEdit");
					}}
				/>
			</HeaderButtons>
		)
	};
};

export default ProfileEdit;

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center"
    },
    formControl: {
        width: "90%",
        margin: 10
	},
	label: {
		fontFamily: "barlow-bold",
		marginVertical: 8
	},
	input: {
		paddingHorizontal: 2,
		paddingVertical: 5,
		borderBottomColor: "#ccc",
        borderBottomWidth: 1
	}
});
