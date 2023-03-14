<?php

require_once 'connection.php';

$username = $_POST['username'];
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$password = $_POST['password'];

$query = "INSERT INTO users (username, firstname, lastname, password) VALUES ('$username', '$firstname', '$lastname', '$password')";
$result = mysqli_query($conn, $query);

if ($result) {
  // insertion successful
} else {
  // insertion failed
}