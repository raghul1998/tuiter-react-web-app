import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import {Routes, Route} from "react-router";
import HomeComponent from "./home";

function Tuiter() {
    return (
        <div className="row pt-1">
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-11 col-xl-10 col-xxl-10">
                <Routes>
                    <Route index element={<HomeComponent/>}/>
                    <Route path="home" element={<HomeComponent/>}/>
                    <Route path="explore" element={<ExploreComponent/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default Tuiter

