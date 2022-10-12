import NavigationSidebar from "../NavigationSidebar/index.js"
import WhoToFollowList from "../WhoToFollowList/index.js"
import ExploreComponents from "./ExploreComponent.js";

function exploreComponent() {
    $('#wd-explore').append(`
       <div class="row pt-1">
           <div class="col-2 col-sm-2 col-md-2 col-lg-1 col-xl-2 col-xxl-2">
                <!--<h3>NavigationSidebar</h3>-->
                ${NavigationSidebar('explore')}
           </div>
           <div class="col-10 col-sm-10 col-md-10 col-lg-7 col-xl-6 col-xxl-6">
                <!--<h3>ExploreComponent</h3>-->
                ${ExploreComponents()}
           </div>
           <div class="col-0 col-sm-0 col-md-0 col-lg-4 col-xl-4 col-xxl-4 d-none d-lg-block">
                <!--<h3>WhoToFollowList </h3>-->
                ${WhoToFollowList()}
           </div>
      </div>
   `);
}

$(exploreComponent);