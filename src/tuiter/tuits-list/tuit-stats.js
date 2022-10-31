import React from "react";
import {useState} from "react";

const TuitStats = ({tuits}) => {
    let [liked, setLiked] = useState(tuits.liked);
    const changeLiked = () => {
        setLiked(!liked)
    }

    return (
        <div className="row ms-1 mt-3 text-secondary">
            <div className="col-3">
                <a href="dummy_comments.html" className="nav-link">
                    <i className="fa-regular fa-comment"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.comments} </span>
                </a>
            </div>
            <div className="col-3">
                <a href="dummy_retuit.html" className="nav-link">
                    <i className="fa-solid fa-retweet"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.retuits} </span>
                </a>
            </div>
            <div className="col-3">
                <a onClick={changeLiked} className="nav-link">
                    {
                        liked &&
                        <i className="fa-solid fa-heart text-danger"></i>
                    }
                    {
                        !liked &&
                        <i className="fa-regular fa-heart"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuits.likes} </span>
                </a>
            </div>
            <div className="col-3">
                <a href="dummpy_share.html" className="nav-link">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </a>
            </div>
        </div>
    )
}

export default TuitStats;