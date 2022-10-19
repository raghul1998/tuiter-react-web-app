import React from "react";
import ExploreComponent from "./explore";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";

function Tuiter() {
    return (
        <div className="row pt-1">
            <div className="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                <ExploreComponent/>
            </div>
            <div className="col-0 col-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-block">
                <WhoToFollowList/>
            </div>
        </div>
    );
}

export default Tuiter

