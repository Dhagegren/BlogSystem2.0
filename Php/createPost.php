<?php

session_start();

require_once 'connection.php';

$userId = $_SESSION['Id'];
$title = $_POST['title'];
$content = $_POST['content'];

$query = "INSERT INTO posts (user_id, title, content) VALUES ('$userId','$title','$content')";
$result = mysqli_query($conn, $query);

if ($result) {
  echo"sucess";
} else {
  echo "Error: " . mysqli_error($conn);
}