// Targeting ID Selectors

let forms = document.getElementById("form");
let text = document.getElementById("text");
let msg = document.getElementById("msg");
let posts = document.getElementById("posts");

//Form-Validation

forms.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("Button Clicked");
  formValidation();
});
let formValidation = () => {
  if (text.value === "") {
    msg.innerHTML = "Post Cannot Be Blank";
    console.log("failure");
  } else {
    console.log("success");
    msg.innerHTML = "";
    acceptdata();
  }
};

//Accepting Data
let data = {};

let acceptdata = () => {
  data["text"] = text.value;
  console.log(data);
  createPost();
};

//Creating Posts

let createPost = () => {
  posts.innerHTML += `
    <div>
    <p>${data.text}</p>
<span class="options">
<i onclick="editPost(this)" class="fas fa-edit"></i>
<i onclick="deletePost(this)" class="fas fa-trash-alt"></i>
</span>    
    </div>
    `;
    text.innerHTML="";
};

//Deleting Post 
 
let deletePost=(e)=>{
e.parentElement.parentElement.remove();
}

//Editing Post

let editPost=(e)=>{
    text.value=e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}