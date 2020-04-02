import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Profile from "../screens/profile/Profile";
import ProfileEdit from "../screens/profile/ProfileEdit";

import Colors from "../constants/Colors";

const profileNavigator = createStackNavigator({
	Profile: Profile,
	ProfileEdit: ProfileEdit
},
{
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: Platform.OS === "android" ? Colors.primary : ""
		},
			headerTintColor: Platform.OS === "android" ? "white" : Colors.primary
	}
}
);

export default createAppContainer(profileNavigator);
