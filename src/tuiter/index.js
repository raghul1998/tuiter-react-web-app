import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";
import ProfileComponent from "./profile"
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import tuitMainReducer from "./tuits-list/tuits-reducer"
import profileReducer from "./profile/profile-reducer";
import {configureStore} from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import EditProfile from "./profile/edit-profile";

const store = configureStore(
    {
        reducer: {
            who: whoReducer,
            tuits: tuitsReducer,
            tuitsMain: tuitMainReducer,
            profile: profileReducer
        }
    });

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row pt-1">
                <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                    <NavigationSidebar active="explore"/>
                </div>
                <div className="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-10 col-xxl-10">
                    <Routes>
                        <Route index element={<HomeComponent/>}/>
                        <Route path="home" element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}

export default Tuiter

