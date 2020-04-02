export const UPDATE_PROFILE = "UPDATE_PROFILE";

export const updateProfile = (
	myPictureUrl,
	firstname,
	lastname,
	description,
	location
) => {
	return {
		type: UPDATE_PROFILE,
		profileData: {
			myPictureUrl,
			firstname,
			lastname,
			description,
			location
		}
	};
};
