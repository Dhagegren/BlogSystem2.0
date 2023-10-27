<?php 
require_once 'connection.php';


global $conn;


$query = "SELECT * FROM users";
$result = mysqli_query($conn, $query);
$users = mysqli_fetch_all($result, MYSQLI_ASSOC);


header('Content-Type: application/json');
echo json_encode($users);
?>

