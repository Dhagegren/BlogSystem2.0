<?php 
require_once 'connection.php';


global $conn;

// Construct the SQL query to retrieve all posts
$sql = "SELECT * FROM posts";

// Execute the query and store the result set
$result = $conn->query($sql);

// Create an array to store the posts
$posts = array();

// Loop through the result set and add each post to the array
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $post = array(
            "id" => $row["id"],
            "title" => $row["title"],
            "content" => $row["content"],
            // ...
        );
        array_push($posts, $post);
    }
}

// Convert the array to a JSON string and echo it
echo json_encode($posts);

