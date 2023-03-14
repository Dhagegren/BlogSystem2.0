var Login = function(){

    View.call(this);
 
    //form för att en användare ska kunna logga in
    this.form = document.createElement("form");
    this.form.setAttribute("id", "form");
    this.viewContainer.appendChild(this.form);

    this.userNameInput = document.createElement("input");
    this.userNameInput.type = 'text';
    this.userNameInput.placeholder = "username";
    this.form.appendChild(this.userNameInput);

    this.passwordInput = document.createElement("input");
    this.passwordInput.type ="password";
    this.passwordInput.placeholder= "Lösenord";
    this.form.appendChild(this.passwordInput);


    this.submit = document.createElement("button");
    this.submit.textContent ="Submit";
    this.form.appendChild(this.submit);


    this.createAccount = document.createElement("button");
    this.createAccount.textContent = "Skapa konto";
    this.viewContainer.appendChild(this.createAccount);

    this.createAccount.addEventListener("click", function(){
        View.add(CreateAccountPage);
        View.swap(2);
    });
    
}


Login.prototype = Object.create(View.prototype);
Login.constructor = View;
