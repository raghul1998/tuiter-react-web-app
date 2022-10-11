const NavigationSidebar = () => {
    return (`
    <!-- Left Pane -->
    <div class="list-group">
        <li class="list-group-item">
          <i class="fab fa-twitter fa-1x"></i>
        </li>
        <a href="" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-house-chimney"></i>
          <span class="d-none d-xl-inline"> Home </span>
        </a>
        <a href="" class="list-group-item list-group-item-action active">
          <i class="fa-regular fa-hashtag"></i>
          <span class="d-none d-xl-inline"> Explore </span>
        </a>
        <a href="" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-bell"></i>
          <span class="d-none d-xl-inline"> Notifications </span>
        </a>
        <a href="" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-envelope"></i>
          <span class="d-none d-xl-inline"> Messages </span>
        </a>
        <a href="" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-bookmark"></i>
          <span class="d-none d-xl-inline"> Bookmarks </span>
        </a>
        <a href="" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-list"></i>
          <span class="d-none d-xl-inline"> Lists </span>
        </a>
        <a href="" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-user"></i>
          <span class="d-none d-xl-inline"> Profile </span>
        </a>
        <a href="" class="list-group-item list-group-item-action">
          <i class="fa-solid fa-circle"></i>
          <span class="d-none d-xl-inline"> More </span>
        </a>
        <button class="btn btn-primary w-100 rounded-pill mt-1">
          <span class="button-text d-none d-sm-block d-lg-none d-xl-block" style="margin-left: -3px">Tweet</span>
          <span class="button-text d-none d-lg-block d-xl-none" style="margin-left: -10px">Tweet</span>
          <b class="button-text d-block d-sm-none">T</b>
        </button>
    </div>
    `)
}

export default NavigationSidebar;