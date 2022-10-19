import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11">
                    <div className="position-relative">
                        <input className="ps-5 form-control rounded-pill"
                               placeholder="Search Tuiter"/>
                        <span className="position-absolute wd-search-tuiter">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </span>
                    </div>
                </div>
                <div className="col-1">
                    <i className="fa-solid fa-gear fa-lg pt-3" style={{color: "#0D6EFD"}}></i>
                </div>
            </div>

            <ul className="nav nav-tabs mt-1 mb-1">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div className="position-relative">
                <img src="./images/starship.jpg" width="100%"/>
                <h1 className="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h1>
            </div>

            <PostSummaryList/>
        </>
    );
};
export default ExploreComponent;

