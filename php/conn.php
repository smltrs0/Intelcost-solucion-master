<?php 

	try
	{
		$conn = new pdo('mysql:host=localhost;dbname=intelcost','root','');
	}
	catch (Exception $e)
	{
		die('Error: '.$e->getMessage());
	}

?>	
