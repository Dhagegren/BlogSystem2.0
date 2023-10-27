<?php

require_once 'connection.php';



  $username = $_POST['username'];
  $password = $_POST['password'];

  
  /*
  Kollar om ett användarnamn redan är taget, isåfall varnas användaren om användarnamnet är fritt skapas en ny användaren med namnet
  */
  $checkQuery = "SELECT COUNT(*) FROM users WHERE userName = '$username'";
  $checkResult = mysqli_query($conn, $checkQuery);
  $existingUsernameCount = mysqli_fetch_assoc($checkResult)['COUNT(*)'];

  if ($existingUsernameCount > 0) {
    echo "username_taken"; 
  } else {
   
    $query = "INSERT INTO users (userName, password) VALUES ('$username', '$password')";
    $result = mysqli_query($conn, $query);

    if ($result) {
      echo "success";
    } else {
      echo "Error: " . mysqli_error($conn);
    }
  }

?>