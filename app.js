const postContent = document.getElementById("postContent")
const post = document.getElementById("post")
let containerText = document.getElementById("containerText")

post.addEventListener("click" , function(){
    
    console.log(postContent.value);
    containerText.innerHTML += `<div>
    <p>
    ${postContent.value}
    </p>
    <button onclick="dltBtn(event)">Delete</button>
    <button id="editBtn">Edit</button>
    </div>` 
    postContent.value = ""
})

function dltBtn(event) {
    console.log("chal gya");
    console.log(event.target.parentNode.remove());
}
