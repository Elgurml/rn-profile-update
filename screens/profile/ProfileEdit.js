import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/UI/HeaderButton";

const ProfileEdit = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Edit page!</Text>
        </View>
    )
}

ProfileEdit.navigationOptions = navData => {
    return {
        headerTitle: "Your Profile",
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
				<Item
					title="Edit profile"
					iconName={
						Platform.OS === "android" ? "md-checkmark" : "ios-checkmark"
					}
					onPress={() => {
						navData.navigation.navigate("ProfileEdit");
					}}
				/>
			</HeaderButtons>
        )
    }
}

export default ProfileEdit

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
