import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector, useDispatch } from "react-redux";

import CustomHeaderButton from "../../components/UI/HeaderButton";
import { ScrollView, TextInput } from "react-native-gesture-handler";
import * as profileActions from "../../store/actions/profile";

const ProfileEdit = props => {
	const dispatch = useDispatch();
	const myProfile = useSelector(state => state.profile.profile);

	const [myPictureUrl, setMyPictureUrl] = useState(myProfile.myPictureUrl);
	const [firstname, setFirstname] = useState(myProfile.firstname);
	const [lastname, setLastname] = useState(myProfile.lastname);
	const [description, setDescription] = useState(myProfile.description);
	const [location, setLocation] = useState(myProfile.location);

	const myPictureTextChangeHandler = text => {
		setMyPictureUrl(text);
	};

	const firstnameTextChangeHandler = text => {
		setFirstname(text);
	};

	const lastnameTextChangeHandler = text => {
		setLastname(text);
	};

	const descriptionTextChangeHandler = text => {
		setDescription(text);
	};

	const locationTextChangeHandler = text => {
		setLocation(text);
	};

	const submitHandler = useCallback(() => {
		dispatch(
			profileActions.updateProfile(
				myPictureUrl,
				firstname,
				lastname,
				description,
				location
			)
		);
		props.navigation.goBack();
	}, [dispatch, myPictureUrl, firstname, lastname, description, location]);

	useEffect(() => {
		props.navigation.setParams({ submit: submitHandler });
	}, [submitHandler]);

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
	const submitFn = navData.navigation.getParam("submit");
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
					onPress={submitFn}
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
