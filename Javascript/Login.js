var Login = function(){
  View.call(this);

  //form för att en användare ska kunna logga in
  this.form = document.createElement("form");
  this.form.setAttribute("id", "form");
  this.viewContainer.appendChild(this.form);

  this.userNameInput = document.createElement("input");
  this.userNameInput.type = 'text';
  this.userNameInput.setAttribute("id", "userName");
  this.userNameInput.placeholder = "Användarnamn";
  this.form.appendChild(this.userNameInput);

  this.passwordInput = document.createElement("input");
  this.passwordInput.type ="password";
  this.passwordInput.setAttribute("id", "password");
  this.passwordInput.placeholder= "Lösenord";
  this.form.appendChild(this.passwordInput);


  this.submit = document.createElement("button");
  this.submit.textContent ="Logga in";
  this.form.appendChild(this.submit);

  this.createAccount = document.createElement("button");
  this.createAccount.textContent = "Skapa konto";
  this.form.appendChild(this.createAccount);

  this.createAccount.addEventListener("click", function(){
      View.add(CreateAccountPage);
      View.swap(2);
  });

  var self = this;
  this.submit.addEventListener("click", function(e){
    e.preventDefault();
    this.disabled = true;
    var xhr = new XMLHttpRequest();
   
    // Define the PHP file URL and method
    var url = "../Php/login.php";
    var method = "POST";
    
   
    xhr.open(method, url, true);
    

    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
   
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = xhr.responseText;
        console.log(xhr.responseText);
        if (response === "login") {
          View.swap(0);
        }
      }
    };
    
    var data = "username=" + encodeURIComponent(this.userNameInput.value) + "&password=" + encodeURIComponent(this.passwordInput.value);
    xhr.send(data);
  }.bind(this));



}

Login.prototype = Object.create(View.prototype);
Login.constructor = View;
