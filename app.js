const postContent = document.getElementById("postContent");
const post = document.getElementById("post");
let containerText = document.getElementById("containerText");
let editBtn = document.querySelector("#editBtn");

// Post add logic
post.addEventListener("click", function () {
  containerText.innerHTML += `<div>
    <p>
    ${postContent.value}
    </p>
    <button onclick="dltBtn(event)" class = "dltBtn">Delete</button>
    <button id="editBtn" class = "editBtn">Edit</button>
    </div>`;
  postContent.value = "";
});

// Function for delete post
function dltBtn(event) {
  let dlt = event.target.parentNode.remove();
}

function editPost(event) {
  const postContainer = event.target.parentNode;
  const postText = postContainer.querySelector(".containerText");
  const currentText = postText.textContent.trim();

  // Create an input field with the current text
  postText.innerHTML = `<input type="text" class="edit-input" value="${currentText}">`;
  const editInput = postContainer.querySelector(".edit-input");

  // Change the Edit button to Save button
  const editBtn = postContainer.querySelector(".editBtn");
  editBtn.textContent = "Save";
  editBtn.onclick = function () {
    saveEdit(event);
  };

  // Focus on the input field
  editInput.focus();

  // Save when pressing Enter
  editInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      saveEdit(event);
    }
  });
}

function saveEdit(event) {
  const postContainer = event.target.parentNode;
  const editInput = postContainer.querySelector(".edit-input");
  const newText = editInput.value.trim();

  if (newText !== "") {
    // Replace input with the new text
    const postText = postContainer.querySelector(".post-text");
    postText.textContent = newText;

    // Change Save button back to Edit button
    const editBtn = postContainer.querySelector(".editBtn");
    editBtn.textContent = "Edit";
    editBtn.onclick = function () {
      editPost(event);
    };
  }
}
