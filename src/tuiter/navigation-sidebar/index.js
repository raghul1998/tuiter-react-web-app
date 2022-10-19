import React from "react";

const NavigationSidebar = (
    {
        active = 'explore'
    }
) => {
    return (
        <div className="list-group">
            <li className="list-group-item">
                <i className="fab fa-twitter fa-1x"></i>
            </li>
            <a id="home-nav-bar" href=""
               className={`list-group-item list-group-item-action ${active === 'home'? 'active': ''}`}>
                <i className="fa-solid fa-house-chimney"></i>
                <span className="d-none d-xl-inline"> Home </span>
            </a>
            <a id="explore-nav-bar" href=""
               className={`list-group-item list-group-item-action ${active === 'explore'? 'active': ''}`}>
                <i className="fa-regular fa-hashtag"></i>
                <span className="d-none d-xl-inline"> Explore </span>
            </a>
            <a id="notifications-nav-bar" href=""
               className={`list-group-item list-group-item-action ${active === 'notifications'? 'active': ''}`}>
                <i className="fa-solid fa-bell"></i>
                <span className="d-none d-xl-inline"> Notifications </span>
            </a>
            <a id="messages-nav-bar" href=""
               className={`list-group-item list-group-item-action ${active === 'messages'? 'active': ''}`}>
                <i className="fa-solid fa-envelope"></i>
                <span className="d-none d-xl-inline"> Messages </span>
            </a>
            <a id="bookmarks-nav-bar" href=""
               className={`list-group-item list-group-item-action ${active === 'bookmarks'? 'active': ''}`}>
                <i className="fa-solid fa-bookmark"></i>
                <span className="d-none d-xl-inline"> Bookmarks </span>
            </a>
            <a id="lists-nav-bar" href=""
               className={`list-group-item list-group-item-action ${active === 'lists'? 'active': ''}`}>
                <i className="fa-solid fa-list"></i>
                <span className="d-none d-xl-inline"> Lists </span>
            </a>
            <a id="profile-nav-bar" href=""
               className={`list-group-item list-group-item-action ${active === 'profile'? 'active': ''}`}>
                <i className="fa-solid fa-user"></i>
                <span className="d-none d-xl-inline"> Profile </span>
            </a>
            <a id="more-nav-bar" href=""
               className={`list-group-item list-group-item-action ${active === 'more'? 'active': ''}`}>
                <i className="fa-solid fa-circle"></i>
                <span className="d-none d-xl-inline"> More </span>
            </a>
            <button className="btn btn-primary w-100 rounded-pill mt-1">
                <span className="button-text d-none d-sm-block d-lg-none d-xl-block"
                      style={{marginLeft: "-3px"}}>Tweet</span>
                <span className="button-text d-none d-lg-block d-xl-none"
                      style={{marginLeft: "-10px"}}>Tweet</span>
                <b className="button-text d-block d-sm-none">T</b>
            </button>
        </div>
    );
};

export default NavigationSidebar;

