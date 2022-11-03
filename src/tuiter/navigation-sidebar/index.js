import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];

    return (
        <div className="list-group">
            <li className="list-group-item">
                <i className="fab fa-twitter fa-1x"></i>
            </li>
            <Link id="home-nav-bar" to="/tuiter/home"
                  className={`list-group-item list-group-item-action ${active === 'home' || active
                                                                       === '' ? 'active' : ''}`}>
                <i className="fa-solid fa-house-chimney"></i>
                <span className="d-none d-xl-inline"> Home </span>
            </Link>
            <Link id="explore-nav-bar" to="/tuiter/explore"
                  className={`list-group-item list-group-item-action ${active === 'explore'
                                                                       ? 'active' : ''}`}>
                <i className="fa-regular fa-hashtag"></i>
                <span className="d-none d-xl-inline"> Explore </span>
            </Link>
            <Link id="explore-nav-bar" to="/"
                  className={`list-group-item list-group-item-action ${active === '/' ? 'active'
                                                                                      : ''}`}>
                <i className="fa-solid fa-flask"></i>
                <span className="d-none d-xl-inline"> Labs </span>
            </Link>
            <Link id="notifications-nav-bar" to=""
                  className={`list-group-item list-group-item-action ${active === 'notifications'
                                                                       ? 'active' : ''}`}>
                <i className="fa-solid fa-bell"></i>
                <span className="d-none d-xl-inline"> Notifications </span>
            </Link>
            <Link id="messages-nav-bar" to=""
                  className={`list-group-item list-group-item-action ${active === 'messages'
                                                                       ? 'active' : ''}`}>
                <i className="fa-solid fa-envelope"></i>
                <span className="d-none d-xl-inline"> Messages </span>
            </Link>
            <Link id="bookmarks-nav-bar" to=""
                  className={`list-group-item list-group-item-action ${active === 'bookmarks'
                                                                       ? 'active' : ''}`}>
                <i className="fa-solid fa-bookmark"></i>
                <span className="d-none d-xl-inline"> Bookmarks </span>
            </Link>
            <Link id="lists-nav-bar" to=""
                  className={`list-group-item list-group-item-action ${active === 'lists' ? 'active'
                                                                                          : ''}`}>
                <i className="fa-solid fa-list"></i>
                <span className="d-none d-xl-inline"> Lists </span>
            </Link>
            <Link id="profile-nav-bar" to="/tuiter/profile"
                  className={`list-group-item list-group-item-action ${active === 'profile'
                                                                       ? 'active' : ''}`}>
                <i className="fa-solid fa-user"></i>
                <span className="d-none d-xl-inline"> Profile </span>
            </Link>
            <Link id="more-nav-bar" to=""
                  className={`list-group-item list-group-item-action ${active === 'more' ? 'active'
                                                                                         : ''}`}>
                <i className="fa-solid fa-circle"></i>
                <span className="d-none d-xl-inline"> More </span>
            </Link>
            <button className="btn btn-primary w-100 rounded-pill mt-1">
                <span className="button-text d-none d-sm-block d-lg-none d-xl-block"
                      style={{marginLeft: "-3px"}}>Tweet</span>
                <span className="button-text d-none d-lg-block d-xl-none"
                      style={{marginLeft: "-6px"}}>Tweet</span>
                <b className="button-text d-block d-sm-none">T</b>
            </button>
        </div>
    );
};

export default NavigationSidebar;

