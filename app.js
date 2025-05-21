const postContent = document.getElementById("postContent")
const post = document.getElementById("post")
let containerText = document.getElementById("containerText")


post.addEventListener("click" , function(){
    postContent.innerHTML = `<div>
    <p>
    ${postContent.value}
    </p>
    </div>` 
    console.log(postContent.value);
})