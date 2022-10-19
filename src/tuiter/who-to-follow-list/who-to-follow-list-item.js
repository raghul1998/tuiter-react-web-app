import React from "react";

const WhoToFollowListItem = ({who}) => {
    return (
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img className="wd-round-image"
                         src={who.avatarIcon} height="40px" width="40px"/>
                </div>
                <div className="col-lg-6 col-xl-6 col-xxl-7">
                    <div className="row">
                        <b>{who.userName} <i className="fa-sharp fa-solid fa-circle-check"></i>
                        </b>
                        &nbsp; @{who.handle}
                    </div>
                </div>
                <div className="col-lg-4 col-lg-4 col-xxl-3">
                    <button className="btn btn-primary w-100 rounded-pill">
                        {/*Follow*/}
                        <span className="button-text d-none d-lg-block d-xl-none"
                              style={{marginLeft: "-5px"}}>Follow</span>
                        <span className="button-text d-none d-xl-block">Follow</span>
                    </button>
                </div>
            </div>
        </li>
    );
};
export default WhoToFollowListItem;

