<?php 

//deklarerar variablerna som används för databasen för att skapa en anslutning.
$dbhost = "localhost";
$dbuser = "dh222ph";
$dbpass = "GuJmvr";
$db = "dh222ph";


//$conn är variablen för anslutningen som skapar en mysqli anslutning med hjälp av variablerna, sen kollar det ifall anslutning lyckas och en funktion för att stänga anslutningen.
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $db);

 if (!$conn){
    echo "connection failed";
 }

function closeCon($conn){
     $conn -> close();
  }