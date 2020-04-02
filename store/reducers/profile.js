import { UPDATE_PROFILE } from "../actions/profile";

const initialProfile = {
	myPictureUrl:
		"https://images.unsplash.com/photo-1516328432920-123fae55f0f3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
	firstname: "Tarja",
	lastname: "Turunen",
	description:
		"I like breathing the fresh air of the fjords, it makes me feel alive !",
	location: "Lofoten Islands"
};

const initialState = {
	profile: initialProfile
};

export default (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_PROFILE:
			const changedProfile = {
				myPictureUrl: action.profileData.myPictureUrl,
				firstname: action.profileData.firstname,
				lastname: action.profileData.lastname,
				description: action.profileData.description,
				location: action.profileData.location
			};
			return { profile: changedProfile };
	}
	return state;
};
