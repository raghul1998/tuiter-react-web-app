import React from "react";

const ProfileBanner = () => {
    return (
        <>
            <div className="row">
                <img src="./images/bts.jpg" alt="" width={100} height={210}/>
            </div>

            <div className="">
                <img className="position-absolute rounded-circle"
                     src="./images/nasa.jpg" alt=""
                     style={{height: "auto", width: "150px", marginLeft:"15px", marginTop: "-70px"}}/>
            </div>
            <br/>
        </>
    )
}

export default ProfileBanner;