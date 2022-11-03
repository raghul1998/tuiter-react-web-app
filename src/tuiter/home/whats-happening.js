import React, {useState} from "react";
import {createTuit} from "../tuits-list/tuits-reducer";
import {useDispatch} from "react-redux";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        const newTuit = {
            title: whatsHappening
        }
        dispatch(createTuit(newTuit));
        setWhatsHappening('')
    }
    return (
        <div className="row">
            <div className="col-auto">
                <img src="./images/nasa.jpg" width={60} alt=""/>
            </div>
            <div className="col-10">
               <textarea value={whatsHappening} placeholder="What's happening?"
                         className="form-control border-0"
                         onChange={(event) => setWhatsHappening(event.target.value)}>
               </textarea>
                <div>
                    <button
                        className="rounded-pill btn btn-primary float-end mt-2 ps-3 pe-3 fw-bold"
                        onClick={tuitClickHandler}>
                        Tuit
                    </button>
                    <div className="text-primary fs-2">
                        <i className="fa-regular fa-image me-3 fa-2xs"></i>
                        <i className="bi bi-filetype-gif me-3 fa-2xs"></i>
                        <i className="bi bi-bar-chart me-3 fa-2xs"></i>
                        <i className="fa-regular fa-face-smile me-3 fa-2xs"></i>
                        <i className="bi bi-geo-alt fa-2xs"></i>
                    </div>
                </div>
            </div>
            <div className="col-12">
                <hr/>
            </div>
        </div>
    );
}
export default WhatsHappening;