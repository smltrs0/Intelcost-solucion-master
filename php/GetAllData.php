<?php
	require('conn.php');
	$statement = $conn->prepare('SELECT * FROM saved_data');
	$statement -> execute();
	$response = $statement->fetchAll();
	echo json_encode($response);


?>
