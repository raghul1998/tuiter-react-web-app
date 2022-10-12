const PostItem = (posts) => {
    let imageDescription = '';
    if (posts.imageDescription !== '') {
        imageDescription = `<div class="ml-3 ml-lg-1 p-2 border border-top-0 border-light wd-rounded-bottom-around">
                                <h6> ${posts.imageTitle} </h6>
                                 <span class="text-secondary fw-bolder">${posts.imageDescription}</span> <br/>
                                 <i class="fa-solid fa-link text-secondary"></i>
                                 <span class="text-secondary">${posts.imageLink}</span>
                            </div>`
    }

    return (`
        <li class="list-group-item border-top-0" style="background-color: black">
            <div class="row">
            
                <div class="col-1">
                    <img class="wd-round-image"
                         src=${posts.avatar} height="40px" width="40px"/>
                </div>
                
                <div class="col-11">
                
                    <div class="ml-3 ml-lg-1">
                        <b>${posts.userName} <i class="fa-sharp fa-solid fa-circle-check"></i> </b>
                         <span class="text-secondary"> @${posts.handle} . ${posts.time} </span>
                    </div>
                   
                    <div class="ml-3 ml-lg-1">
                        ${posts.title}
                    </div>

                    <div class="ml-3 ml-lg-1 mt-2">
                        <img class="rounded border border-light wd-rounded-top-around img-fluid" 
                        src=${posts.image} width="100%"/>
                    </div>
                    
                    ${imageDescription}
                    
                    <div class="row ml-1 mt-3 text-secondary">
                        <div class="col-3">
                            <i class="fa-regular fa-comment"></i> <span class="pl-sm-2"> ${posts.comments} </span>
                        </div>
                        <div class="col-3">
                            <i class="fa-solid fa-retweet"></i> <span class="pl-sm-2"> ${posts.retuits} </span>
                        </div>
                        <div class="col-3">
                            <i class="fa-regular fa-heart"></i> <span class="pl-sm-2"> ${posts.likes} </span>
                        </div>
                        <div class="col-3">
                            <i class="fa-solid fa-arrow-up-from-bracket"></i>
                        </div>
                    </div>

                </div>
                
            </div>
        </li>
    `)
}

export default PostItem;