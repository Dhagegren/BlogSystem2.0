var CreateAccountPage = function () {

    View.call(this);


    
    
    this.form = document.createElement("form");
    this.form.setAttribute("id", "createAccountForm");
    this.viewContainer.appendChild(this.form);

    this.header = document.createElement("h2");
    this.header.textContent = "Skapa ett konto";
    this.form.appendChild(this.header);

    this.createUsername = document.createElement("input");
    this.createUsername.type = 'text';
    this.createUsername.placeholder = "username";
    this.form.appendChild(this.createUsername);



    this.createPassword = document.createElement("input");
    this.createPassword.type = "password";
    this.createPassword.placeholder = "Lösenord";
    this.form.appendChild(this.createPassword);


    this.submit = document.createElement("button");
    this.submit.textContent = "Skapa konto";
    this.form.appendChild(this.submit);


    //kod för att skapa kontot och för att lägga in det i databasen, skicka till php
    
    this.submit.addEventListener('click', function(e) {
        e.preventDefault();

        var xhr = new XMLHttpRequest();
        var url = "../Php/createNewUser.php";
        var method = "POST";
        
        xhr.open(method, url, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        
        xhr.onreadystatechange = function() {
          if (xhr.readyState === 4 && xhr.status === 200) {
            if (xhr.responseText === "success") {
              alert("Konto skapat")
              View.swap(1);
             
            } else if (xhr.responseText === "username_taken") {
              alert("Användarnamn upptaget");
            } else {
              console.error('Error :', xhr.responseText);
            }
          }
        };
        
        var data = "username=" + encodeURIComponent(this.createUsername.value) +
                   "&password=" + encodeURIComponent(this.createPassword.value);
        
        xhr.send(data);
    }.bind(this));
}



CreateAccountPage.prototype = Object.create(View.prototype);
CreateAccountPage.constructor = View;