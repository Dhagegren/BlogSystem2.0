var Feed = function(){

View.call(this);

this.createPosts = document.createElement("div");
this.viewContainer.appendChild(this.createPosts);

this.textField = document.createElement("input");
this.textField.type="text";
this.createPosts.appendChild(this.textField);

this.submitBtn = document.createElement("button");
this.submitBtn.textContent = "Submit";
this.createPosts.appendChild(this.submitBtn);


    
const xhr = new XMLHttpRequest();
const url = "../Php/get_posts.php";

xhr.open("GET", url, true);

xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    const posts = JSON.parse(xhr.responseText);
    for (let i = 0; i < posts.length; i++) {
      console.log(posts[i].content);
    }
  }
};

xhr.send();
}


Feed.prototype = Object.create(View.prototype);
Feed.constructor = View;