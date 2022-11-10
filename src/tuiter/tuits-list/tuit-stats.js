import React, {useState} from "react";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = ({tuits}) => {
    const dispatch = useDispatch();
    //let [tuit, settuit] = useState(tuits);
    const changeLiked = () => {
        /*settuit({
                    ...tuit,
                    liked: !tuit.liked
                })*/
        if (tuits.liked === false) {
            dispatch(updateTuitThunk({
                                         ...tuits,
                                         liked: true,
                                         likes: tuits.likes + 1
                                     }))
        } else {
            if (tuits.liked === true) {
                dispatch(updateTuitThunk({
                                             ...tuits,
                                             liked: false,
                                             likes: tuits.likes - 1
                                         }))
            }
        }
    }

    function changeDisliked() {
        if (tuits.disliked === false) {
            dispatch(updateTuitThunk({
                                         ...tuits,
                                         disliked: true,
                                         dislikes: tuits.dislikes + 1
                                     }))
        } else {
            if (tuits.disliked === true) {
                dispatch(updateTuitThunk({
                                             ...tuits,
                                             disliked: false,
                                             dislikes: tuits.dislikes - 1
                                         }))
            }
        }
    }

    return (
        <div className="ms-1 mt-3 text-secondary"
             style={{display: "flex", justifyContent: "space-between"}}>
            <div className="">
                <Link to={""} className="nav-link">
                    <i className="fa-regular fa-comment"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.comments} </span>
                </Link>
            </div>
            <div className="">
                <Link to={""} className="nav-link">
                    <i className="fa-solid fa-retweet"></i> &nbsp;
                    <span className="pl-sm-2"> {tuits.retuits} </span>
                </Link>
            </div>
            <div className="">
                <Link onClick={changeLiked} className="nav-link" to={""}>
                    {
                        tuits.liked &&
                        <i className="fa-solid fa-heart text-danger"></i>
                    }
                    {
                        !tuits.liked &&
                        <i className="fa-regular fa-heart"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuits.likes} </span>
                </Link>
            </div>
            <div className="">
                <Link onClick={changeDisliked} className="nav-link" to={""}>
                    {
                        tuits.disliked &&
                        <i className="fa-solid fa-thumbs-down"></i>
                    }
                    {
                        !tuits.disliked &&
                        <i className="fa-regular fa-thumbs-down"></i>
                    }
                    &nbsp;
                    <span className="pl-sm-2"> {tuits.dislikes} </span>
                </Link>
            </div>
            <div className="">
                <Link to={""} className="nav-link">
                    <i className="fa-solid fa-arrow-up-from-bracket"></i>
                </Link>
            </div>
        </div>
    )
}

export default TuitStats;