var Main = {
  init: function() {
      
      View.add(Feed); 
      View.add(Login); 
   
      const xhr = new XMLHttpRequest();
      const url = "../Php/check_login.php";
      
      xhr.open("GET", url, true);
      
   
      xhr.onreadystatechange = function() {
          if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
           
              if (xhr.responseText === "true") {
                  View.swap(0);
                  console.log("User is logged in");
              } else {
                  View.swap(1);
                  console.log("User is not logged in");
              }
          }
      };
      xhr.send();
  }
}

window.addEventListener("load", Main.init);