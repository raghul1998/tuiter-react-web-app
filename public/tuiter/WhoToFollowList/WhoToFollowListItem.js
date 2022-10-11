const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-2">
                    <img class="wd-round-image"
                         src=${who.avatarIcon} height="40px" width="40px"/>
                </div>
                <div class="col-lg-6 col-xl-6 col-xxl-7">
                    <div class="row">
                        <b>${who.userName} <i class="fa-sharp fa-solid fa-circle-check"></i> </b>
                        &nbsp @${who.handle}
                    </div>
                </div>
                <div class="col-lg-4 col-lg-4 col-xxl-3">
                    <button class="btn btn-primary w-100 rounded-pill">
                        <!--Follow-->
                        <span class="button-text d-none d-lg-block d-xl-none" style="margin-left: -5px">Follow</span>
                        <span class="button-text d-none d-xl-block">Follow</span>
                    </button>
                </div>
            </div>
        </li>
    `)
}

export default WhoToFollowListItem;