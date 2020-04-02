import React, { useState } from 'react';
import { AppLoading } from "expo";
import * as Font from "expo-font";

import ProfileNavigator from './navigation/profileNavigator';

const fetchFonts = () => {
	return Font.loadAsync({
		"barlow": require("./assets/fonts/Barlow-Regular.ttf"),
		"barlow-bold": require("./assets/fonts/Barlow-Bold.ttf")
	});
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
		return (
			<AppLoading
				startAsync={fetchFonts}
				onFinish={() => {
					setFontLoaded(true);
				}}
			/>
		);
	}

  return (
    <ProfileNavigator />
  ) 
}