<?php 
  
    session_start();
     require_once 'connection.php';
     
     $username = $_POST['username'];
     $password = $_POST['password'];
     
     
     $query= "SELECT * FROM users WHERE username='$username' AND password ='$password'";
     global $conn;
     $result = mysqli_query($conn, $query);
     $count=mysqli_num_rows($result);
     $user = mysqli_fetch_array($result, MYSQLI_ASSOC);
      
      if($count>0)
          {
             $_SESSION['Id'] = $user['id'];
              echo "login";
          }
         else {
             echo "login failed";    
         }
     

?>