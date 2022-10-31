import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "avatar": "./images/nasa.jpg"
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "comments": 0,
    "retuits": 0,
    "likes": 0,
    "image": "",
    "imageLink": "",
    "imageDescription": "",
    "imageTitle": ""
}

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: tuits,
                                   reducers: {
                                       deleteTuit(state, action) {
                                           const index = state
                                               .findIndex(tuit =>
                                                              tuit._id === action.payload);
                                           state.splice(index, 1);
                                       },
                                       createTuit(state, action) {
                                           console.log(action.payload)
                                           state.unshift({
                                                             ...action.payload,
                                                             ...templateTuit,
                                                             _id: (new Date()).getTime(),
                                                         }
                                           )
                                       }
                                   }

                               });

export const {createTuit, deleteTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;