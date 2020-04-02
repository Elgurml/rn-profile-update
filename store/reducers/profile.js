const initialProfile = {
    firstname: "Tarja",
    lastname: "Turunen",
    description: "I like breathing the fresh air of the fjords, it makes me feel alive !",
    location: "Lofoten Islands"
}

const initialState = {
    profile: initialProfile,
    updatedProfile: initialProfile
}

export default (state = initialState, action) => {
    // switch (action.type) {
    //     case UPDATE_PROFILE:
    // }
    return state;
}