import React from "react";
import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
/*import {deleteTuit} from "./tuits-reducer";*/
import {deleteTuitThunk} from "../../services/tuits-thunks";

const TuitItem = ({tuits}) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        /*dispatch(deleteTuit(id));*/
        console.log(id);
        dispatch(deleteTuitThunk(id));
    }

    let imageDescription = '';
    if (tuits.imageDescription !== '') {
        imageDescription =
            <div
                className="ml-3 ml-lg-1 p-2 border border-top-0 border-light wd-rounded-bottom-around">
                <h6> {tuits.imageTitle} </h6>
                <span className="fw-bolder">{tuits.imageDescription}</span> <br/>
                <i className="fa-solid fa-link text-secondary"></i>
                <span className="text-secondary">{tuits.imageLink}</span>
            </div>
    }

    return (
        <li key={tuits._id} className="list-group-item border">
            <div className="row">

                <div className="col-1">
                    <img className="wd-round-image"
                         src={tuits.avatar} height="40px" width="40px" alt=""/>
                </div>

                <div className="col-11">

                    <div className="ms-3 ms-lg-0">
                        <b>{tuits.userName} <i
                            className="text-primary fa-sharp fa-solid fa-circle-check"></i>
                        </b>
                        <span className="text-secondary"> @{tuits.handle} . {tuits.time} </span>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(tuits._id)}> </i>
                    </div>

                    <div className="ms-3 ms-lg-0">
                        {tuits.title}
                    </div>

                    <div className="ms-3 ms-lg-0 mt-2">
                        <img className="rounded border border-light wd-rounded-top-around img-fluid"
                             src={tuits.image} width="100%" alt=""/>
                    </div>

                    {imageDescription}

                    <TuitStats tuits={tuits}/>

                </div>

            </div>
        </li>
    );
};

export default TuitItem;