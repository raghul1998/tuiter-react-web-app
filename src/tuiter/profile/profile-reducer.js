import {createSlice} from "@reduxjs/toolkit";

let userProfile = {
    firstName: 'Steve',
    lastName: 'Jobs',
    handle: '@stevejobs',
    profilePicture: 'jose.png',
    bannerPicture: 'polyglot.png',
    bio: 'Faculty, Software Engineer, AI, Space, and renewable enthusiast. Retuits and '
         + 'likes are not endorsements.',
    website: 'youtube.com/stevejobs',
    location: 'San Francisco, CA',
    dateOfBirth: '1955-02-24',
    dateJoined: '04/2009',
    followingCount: 340,
    followersCount: 223,
    numberOfTweets: 6114
};

const profileSlice = createSlice({
                                     name: 'userProfile',
                                     initialState: userProfile,
                                     reducers: {
                                         editProfile(state, action) {
                                             return action.payload;
                                         }
                                     }
                                 });

export const {editProfile} = profileSlice.actions;
export default profileSlice.reducer;
