<?php


require_once 'connection.php';

session_start();


$postId = $_POST['postId'];
$userId = $_SESSION['Id'];



$checkQuery = "SELECT COUNT(*) FROM likes WHERE post_id = $postId AND user_id = $userId";
$checkResult = mysqli_query($conn, $checkQuery);
$alreadyLiked = mysqli_fetch_assoc($checkResult)['COUNT(*)'];

/*
Kollar om användaren redan har gillat inlägget och tar då bort gilla markeringen 
om användaren inte har gillat så skapas en ny dislike.
*/
if ($alreadyLiked) {
  $deleteQuery = "DELETE FROM likes WHERE post_id = $postId AND user_id = $userId";
  $deleteResult = mysqli_query($conn, $deleteQuery);

  if ($deleteResult) {
    $updateQuery = "UPDATE posts SET like_count = like_count - 1 WHERE Id = $postId";
    $updateResult = mysqli_query($conn, $updateQuery);

    if ($updateResult) {
      echo "undone"; 
    } else {
      echo "Error updating like count: " . mysqli_error($conn);
    }
  } else {
    echo "Error removing like: " . mysqli_error($conn);
  }
} else {
  $insertQuery = "INSERT INTO dislikes (post_id, user_id) VALUES ($postId, $userId)";
  $insertResult = mysqli_query($conn, $insertQuery);

  if ($insertResult) {
    $updateQuery = "UPDATE posts SET like_count = like_count - 1 WHERE Id = $postId";
    $updateResult = mysqli_query($conn, $updateQuery);

    if ($updateResult) {
      echo "success"; 
    } else {
      echo "Error updating like count: " . mysqli_error($conn);
    }
  } else {
    echo "Error inserting dislike: " . mysqli_error($conn);
  }
}
