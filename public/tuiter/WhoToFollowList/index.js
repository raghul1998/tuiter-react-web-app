import who from "./who.js";
import WhoToFollowListItem from "./WhoToFollowListItem.js";

const WhoToFollowList = () => {
    return (`
        <div class="list-group">
            <li class="list-group-item">
                <b> Who to follow </b>
            </li>
            ${
                who.map (who => (` ${WhoToFollowListItem(who)} `)).join('')
            }
        </div>
    `)
}

export default WhoToFollowList;