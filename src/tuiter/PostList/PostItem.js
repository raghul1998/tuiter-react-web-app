import React from "react";

const PostItem = ({posts}) => {
    let imageDescription = '';
    if (posts.imageDescription !== '') {
        imageDescription =
            <div
                className="ml-3 ml-lg-1 p-2 border border-top-0 border-light wd-rounded-bottom-around">
                <h6> {posts.imageTitle} </h6>
                <span className="fw-bolder">{posts.imageDescription}</span> <br/>
                <i className="fa-solid fa-link text-secondary"></i>
                <span className="text-secondary">{posts.imageLink}</span>
            </div>
    }

    return (
        <li className="list-group-item border-top-0">
            <div className="row">

                <div className="col-1">
                    <img className="wd-round-image"
                         src={posts.avatar} height="40px" width="40px"/>
                </div>

                <div className="col-11">

                    <div className="ml-1 ml-lg-3">
                        <b>{posts.userName} <i
                            className="text-primary fa-sharp fa-solid fa-circle-check"></i>
                        </b>
                        <span className="text-secondary"> @{posts.handle} . {posts.time} </span>
                    </div>

                    <div className="ml-3 ml-lg-1">
                        {posts.title}
                    </div>

                    <div className="ml-3 ml-lg-1 mt-2">
                        <img className="rounded border border-light wd-rounded-top-around img-fluid"
                             src={posts.image} width="100%"/>
                    </div>

                    {imageDescription}

                    <div className="row ml-1 mt-3 text-secondary">
                        <div className="col-3">
                            <i className="fa-regular fa-comment"></i>
                            <span className="pl-sm-2"> {posts.comments} </span>
                        </div>
                        <div className="col-3">
                            <i className="fa-solid fa-retweet"></i>
                            <span className="pl-sm-2"> {posts.retuits} </span>
                        </div>
                        <div className="col-3">
                            <i className="fa-regular fa-heart"></i>
                            <span className="pl-sm-2"> {posts.likes} </span>
                        </div>
                        <div className="col-3">
                            <i className="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>

                </div>

            </div>
        </li>
    );
};

export default PostItem;