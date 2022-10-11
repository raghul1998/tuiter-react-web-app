const PostSummaryItem = (post) => {
    let tweet = '';
    let userNameAndTime = '';

    if(post.tweet !== '') {
        tweet = `<div class="text-secondary"> ${post.tweet} Tweets </div>`
    }

    if(post.userName !== '') {
        userNameAndTime = `<div class="fw-bolder">
                                ${post.userName}
                                <i class="fa-sharp fa-solid fa-circle-check"></i>
                                <span class="wd-post-time-color"> - ${post.time} </span>
                           </div>`
    }

    return (`
        <li class="list-group-item">
            <div class="row">
                <div class="col-10">
                    <div class="text-secondary">
                        ${post.topic}
                    </div>
                    ${userNameAndTime}
                    <div class="fw-bolder">
                        ${post.title}
                    </div>
                    ${tweet}
                </div>
                <div class="col-2">
                    <img class="float-end rounded img-fluid" src=${post.image} />
                </div>
            </div>
        </li>
    `)
}

export default PostSummaryItem;