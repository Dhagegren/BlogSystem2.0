<?php

require_once 'connection.php';

session_start();


$postId = $_POST['postId'];
$userId = $_SESSION['Id'];

/*
Kollar om en användare redan har gillat ett inlägg och då händer inget, annars skapas en ny gillning och uppdaterar gilla räknaren på inlägget.
*/

  $checkQuery = "SELECT COUNT(*) FROM likes WHERE post_id = $postId AND user_id = $userId";
  $checkResult = mysqli_query($conn, $checkQuery);
  $alreadyLiked = mysqli_fetch_assoc($checkResult)['COUNT(*)'];

  if ($alreadyLiked) {
    echo "already_liked"; 
  } else {
    $insertQuery = "INSERT INTO likes (post_id, user_id) VALUES ($postId, $userId)";
    $insertResult = mysqli_query($conn, $insertQuery);

    if ($insertResult) {
        $updateQuery = "UPDATE posts SET like_count = like_count + 1 WHERE Id = $postId";
        $updateResult = mysqli_query($conn, $updateQuery);
    
        if ($updateResult) {
          echo "success"; 
        } else {
          echo "Error updating like_count: " . mysqli_error($conn);
        }
      } else {
        echo "Error inserting like: " . mysqli_error($conn);
      }
    }
?>



