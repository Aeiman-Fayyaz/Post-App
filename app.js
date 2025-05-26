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
    <button onclick="editBtn2(event)" class = "editBtn">Edit</button>
    </div>`;
  postContent.value = "";
});

// Function for delete post
function dltBtn(event) {
  let dlt = event.target.parentNode.remove();
}

// Function for edit post
// function editBtn2(event) {
//   const postDiv = event.target.parentNode;
//   const postText = postDiv.querySelector('p');
//   const currentText = postText.innerText.trim();
  
//   // Replace text with an input field containing current text
//   postText.innerHTML = `<input type="text" value="${currentText}" class="edit-input">`;
  
//   // Focus on the input field
//   const inputField = postText.querySelector('.edit-input');
//   inputField.focus();
  
//   // Handle when user presses Enter or loses focus
//   inputField.addEventListener('blur', saveEdit);
//   inputField.addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//       saveEdit.call(this);
//     }
//   });
  
//   function saveEdit() {
//     const newText = this.value.trim();
//     if (newText) {
//       postText.innerText = newText;
//     } else {
//       postText.innerText = currentText; // Revert if empty
//     }
//   }
// }
function editBtn2(event) {
  const editButton = event.target;
  const postDiv = editButton.parentNode;
  const postText = postDiv.querySelector('p');
  const currentText = postText.innerText.trim();

  // Check if we're already in edit mode (button says "Save")
  if (editButton.textContent === "Save") {
    // Save the changes
    const inputField = postDiv.querySelector('.edit-input');
    const newText = inputField.value.trim();
    postText.innerText = newText || currentText; // Use new text or keep old if empty
    editButton.textContent = "Edit"; // Change back to Edit button
  } else {
    // Enter edit mode
    postText.innerHTML = `<input type="text" value="${currentText}" class="edit-input">`;
    editButton.textContent = "Save"; // Change to Save button
    
    // Focus on the input field
    const inputField = postText.querySelector('.edit-input');
    inputField.focus();
  }
}