import React from "react";

const ProfileBanner = () => {
    return (
        <>
            <div className="row">
                <img src="./images/bts.jpg" alt="" width={100} height={210}/>
            </div>

            <div className="position-relative">
                <img className="position-absolute bottom-0 left-0 rounded-circle"
                     src="./images/nasa.jpg" alt=""
                     style={{height: "auto", width: "150px"}}/>
            </div>
        </>
    )
}

export default ProfileBanner;