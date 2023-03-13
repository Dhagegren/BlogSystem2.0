var Login = function(){
    //form för att en användare ska kunna logga in
    var form = document.createElement("form");
    var submit = document.createElement("submit");

    //skapa en knapp användaren kan trycka på för att skapa nytt konto
    var createAccount = document.createElement("button");
    createAccount.textContent="Skapa ett nytt konto";







    if(user == loggedin){
        //använd php_session för att kontrollera detta
        //när användaren är inloggad ska man bli swappad till sitt feed där man ska se sina och vänners inlägg.
        View.swap(1);
    }

    
}