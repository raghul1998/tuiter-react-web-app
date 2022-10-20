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
                         src={posts.avatar} height="40px" width="40px" alt=""/>
                </div>

                <div className="col-11">

                    <div className="ms-3 ms-lg-0">
                        <b>{posts.userName} <i
                            className="text-primary fa-sharp fa-solid fa-circle-check"></i>
                        </b>
                        <span className="text-secondary"> @{posts.handle} . {posts.time} </span>
                    </div>

                    <div className="ms-3 ms-lg-0">
                        {posts.title}
                    </div>

                    <div className="ms-3 ms-lg-0 mt-2">
                        <img className="rounded border border-light wd-rounded-top-around img-fluid"
                             src={posts.image} width="100%" alt=""/>
                    </div>

                    {imageDescription}

                    <div className="row ms-1 mt-3 text-secondary">
                        <div className="col-3">
                            <a href="dummy_comments.html" className="nav-link">
                                <i className="fa-regular fa-comment"></i> &nbsp;
                                <span className="pl-sm-2"> {posts.comments} </span>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="dummy_retuit.html" className="nav-link">
                                <i className="fa-solid fa-retweet"></i> &nbsp;
                                <span className="pl-sm-2"> {posts.retuits} </span>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="dummy_likes.html" className="nav-link">
                                <i className="fa-regular fa-heart"></i> &nbsp;
                                <span className="pl-sm-2"> {posts.likes} </span>
                            </a>
                        </div>
                        <div className="col-3">
                            <a href="dummpy_share.html" className="nav-link">
                                <i className="fa-solid fa-arrow-up-from-bracket"></i>
                            </a>
                        </div>
                    </div>

                </div>

            </div>
        </li>
    );
};

export default PostItem;