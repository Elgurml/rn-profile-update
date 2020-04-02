import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import CustomHeaderButton from "../../components/UI/HeaderButton";


const Profile = (props) => {
    return (
        <View style={styles.screen}>
            <Text>Profile page!</Text>
        </View>
    )
}

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
    }
}

export default Profile

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})
