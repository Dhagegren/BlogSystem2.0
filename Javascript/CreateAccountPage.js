var CreateAccountPage = function () {

    View.call(this);

    this.form = document.createElement("form");
    this.form.setAttribute("id", "createAccountForm");
    this.viewContainer.appendChild(this.form);

    this.createUsername = document.createElement("input");
    this.createUsername.type = 'text';
    this.createUsername.placeholder = "username";
    this.form.appendChild(this.createUsername);

    this.createFirstName = document.createElement("input");
    this.createFirstName.type = 'text';
    this.createFirstName.placeholder = "Förnamn";
    this.form.appendChild(this.createFirstName);

    this.createLastName = document.createElement("input");
    this.createLastName.type = 'text';
    this.createLastName.placeholder = "Efternamn";
    this.form.appendChild(this.createLastName);



    this.createPassword = document.createElement("input");
    this.createPassword.type = "password";
    this.createPassword.placeholder = "Lösenord";
    this.form.appendChild(this.createPassword);


    this.submit = document.createElement("button");
    this.submit.textContent = "Skapa konto";
    this.form.appendChild(this.submit);


    //kod för att skapa kontot och för att lägga in det i databasen, skicka till php
    //funkar ej riktigt, den gör sin grej men tar mig tillbaka till första sidan.
    
    this.submit.addEventListener('click', function() {
        console.log("hej");
        e.preventDefault();

        const formData = new FormData(form);

        fetch('creatNewUser.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.text())
            .then(data => {
                console.log(data);
                View.swap(1);
                // Handle success response from PHP script
            })
            .catch(error => {
                console.error(error);
                // Handle error response from PHP script
            });
        });
}



CreateAccountPage.prototype = Object.create(View.prototype);
CreateAccountPage.constructor = View;