var Main = {

 init: function(){
    View.add(Login);
    View.add(Feed);
    
const xhr = new XMLHttpRequest();

const url = "../Php/check_login.php";

xhr.open("GET", url, true);

// Define the function to execute when the request is complete
xhr.onreadystatechange = function() {
  if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
    // Handle the response data here
    if (xhr.responseText === "true") {
        View.swap(1)
      // User is logged in
      console.log("User is logged in");
    } else {
        View.swap(0);
      // User is not logged in
      console.log("User is not logged in");
    }
  }
};

xhr.send();
    
}


}
window.addEventListener("load", Main.init);