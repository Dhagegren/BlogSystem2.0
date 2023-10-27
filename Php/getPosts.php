<?php 
require_once 'connection.php';


global $conn;

//$query = "SELECT * FROM posts ORDER BY Id DESC";
$query = "
    SELECT 
        posts.*,
        users.username AS author
    FROM 
        posts
    JOIN 
        users ON posts.user_id = users.id
    ORDER BY 
        posts.Id DESC
";
$result = mysqli_query($conn, $query);
$posts = mysqli_fetch_all($result, MYSQLI_ASSOC);

header('Content-Type: application/json');
echo json_encode($posts);
?>



