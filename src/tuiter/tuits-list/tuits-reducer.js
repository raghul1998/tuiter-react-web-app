import {createSlice} from "@reduxjs/toolkit";
import tuits from './tuits.json';
import {
    createTuitThunk,
    deleteTuitThunk,
    findTuitsThunk,
    updateTuitThunk
} from "../../services/tuits-thunks";

/*const initialState = {
    tuits: tuits,
    loading: false
}*/

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
    "userName": "NASA",
    "handle": "nasa",
    "avatar": "./images/nasa.jpg"
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "comments": 0,
    "retuits": 0,
    "image": "",
    "imageLink": "",
    "imageDescription": "",
    "imageTitle": ""
}

/*const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: initialState,
                                   reducers: {
                                       deleteTuit(state, action) {
                                           const index = state.tuits.findIndex(tuit =>
                                                                                   tuit._id
                                                                                   === action.payload);
                                           state.tuits.splice(index, 1);
                                       },
                                       createTuit(state, action) {
                                           state.tuits.unshift({
                                                                   ...action.payload,
                                                                   ...templateTuit,
                                                                   _id: (new Date()).getTime(),
                                                               }
                                           )
                                       }
                                   }

                               });*/

const tuitsSlice = createSlice({
                                   name: 'tuits',
                                   initialState: initialState,
                                   extraReducers: {
                                       [findTuitsThunk.pending]: (state) => {
                                           state.loading = true
                                           state.tuits = []
                                       },
                                       [findTuitsThunk.fulfilled]: (state, {payload}) => {
                                           state.loading = false
                                           state.tuits = payload
                                       },
                                       [findTuitsThunk.rejected]: (state) => {
                                           state.loading = false
                                       },
                                       [deleteTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false
                                               state.tuits = state.tuits
                                                   .filter(t => t._id !== payload)
                                           },
                                       [createTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false
                                               state.tuits.push(
                                                   payload
                                               )
                                           },
                                       [updateTuitThunk.fulfilled]:
                                           (state, {payload}) => {
                                               state.loading = false
                                               const tuitNdx = state.tuits
                                                   .findIndex((t) => t._id === payload._id)
                                               state.tuits[tuitNdx] = {
                                                   ...state.tuits[tuitNdx],
                                                   ...payload
                                               }
                                           }
                                   }
                               });

/*export const {createTuit, deleteTuit} = tuitsSlice.actions;*/
export default tuitsSlice.reducer;
