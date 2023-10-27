var Feed = function(){

  View.call(this);

  this.posts = [];
  const xhr = new XMLHttpRequest();

  const self = this;

  xhr.onreadystatechange = function() {
    if (this.readyState === 4 && this.status === 200) {
      self.posts = JSON.parse(this.responseText);
      self.renderPost();
   
      
    }
  };

  xhr.open("GET", "../Php/getPosts.php", true);
  xhr.send();



  this.createPosts = document.createElement("div");
  this.createPosts.setAttribute("id", "container");
  this.viewContainer.appendChild(this.createPosts);

  
  this.createTitle = document.createElement("input");
  this.createTitle.placeholder= "skriv en titel";
  this.createTitle.type = "text";
  this.createPosts.appendChild(this.createTitle);

  this.textField = document.createElement("input");
  this.textField.placeholder = "Skriv...";
  this.textField.setAttribute("id", "box");
  this.textField.type="text";
  this.createPosts.appendChild(this.textField);

  this.submitBtn = document.createElement("button");
  this.submitBtn.textContent = "Submit";
  this.createPosts.appendChild(this.submitBtn);


  /*
  När man trycker på submit knappen så skapas ett nytt inlägg genom att skicka 
  informationen till createPost.php.
  */
  this.submitBtn.addEventListener("click", function(e) {
    e.preventDefault();
  
    var xhr = new XMLHttpRequest();
    var url = "../Php/createPost.php";
    var method = "POST";
  
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var response = xhr.responseText;
        } else {
          console.log("Error:", xhr.status, xhr.statusText);
        }
      }
    };
  
    var data = "title=" + encodeURIComponent(this.createTitle.value) + "&content=" + encodeURIComponent(this.textField.value);
    xhr.send(data);
  }.bind(this));
  
  
  this.renderPost = function() {

    for(let i=0; i<this.posts.length; i++){

      console.log(this.posts);
      
      this.postContainer = document.createElement("div");
      this.postContainer.classList.add("Post");
      this.viewContainer.appendChild(this.postContainer);

      this.postTitle = document.createElement("h2");
      this.postTitle.textContent = this.posts[i].title;
      this.postContainer.appendChild(this.postTitle);

      this.author = document.createElement("p");
      this.author.textContent = "Författare: " + this.posts[i].author;
      this.postContainer.appendChild(this.author);


      this.postContent = document.createElement("p");
      this.postContent.textContent = this.posts[i].content;
      this.postContainer.appendChild(this.postContent);

      this.postContent = document.createElement("p");
      this.postContent.textContent = "Skapad: " + this.posts[i].created_at;
      this.postContainer.appendChild(this.postContent);

      /*
      Skapar en gilla knapp som gillar ett inlägg, om användaren redan har gillat 
      inlägget så händer ingenting.
      */
      this.postLike = document.createElement("button");
      this.postLike.textContent = "Gilla";
      this.postLike.addEventListener("click", () => {
        var postId = this.posts[i].Id;
          
        var xhr = new XMLHttpRequest();
        var url = "../Php/like.php";
        var method = "POST";
      
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.responseText === "success") {
              console.log("Liked successfully");
              
            } else if (xhr.responseText === "already_liked") {
              console.log("Already liked this post");
            } 

          }
        };
        var data = "postId=" + encodeURIComponent(postId); // Construct the data
        xhr.send(data);
      });
      this.postContainer.appendChild(this.postLike)


      /*
      Skapar en dislike knapp som skickar postId till dislike.php och antingen tar 
      bort en gillning om man redan har gillat eller skapar en ny dislike.
      */
      this.postDislike = document.createElement("button");
      this.postDislike.textContent = "Ogilla";
      this.postDislike.addEventListener("click",()=>{
        var postId = this.posts[i].Id;
       
       
        var xhr = new XMLHttpRequest();
        var url = "../Php/dislike.php";
        var method = "POST";
      
        xhr.open(method, url, true); // Open the request
      
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.responseText === "success") {
              console.log("Disliked");
            } else if (xhr.responseText === "undone") {
              console.log("Disliked");
            }
          }
        };
        var data = "postId=" + encodeURIComponent(postId);
        xhr.send(data); // Send the request
      });
      this.postContainer.appendChild(this.postDislike);



      this.likeCounter = document.createElement("p");
      this.likeCounter.textContent= "Gillningar: " + this.posts[i].like_count;
      this.postContainer.appendChild( this.likeCounter);
    }
  }



  
}

Feed.prototype = Object.create(View.prototype);
Feed.constructor = View;