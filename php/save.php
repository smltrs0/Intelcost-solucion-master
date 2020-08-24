<?php 

	require('conn.php');
	$statement = $conn->prepare('INSERT INTO saved_data VALUES(:id)');
	$statement->execute(array(':id' => $_POST['id']));

	header('location: ../index.html');




?>
