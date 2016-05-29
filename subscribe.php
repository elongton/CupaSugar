<?php

if ( ! empty( $_POST ) ) {
	
	//print_r($_POST); exit;
	
	// Connect to MySQL
	
	
	$user = 'optimale_max';
	$pass = 'M3087puttie!!!!!';
	$db = 'optimale_cupasugardb';
	
	$mysqli = new mysqli('localhost', $user, $pass, $db);
	
	//Check our connection
	
	if ($mysqli ->connect_error) {	
		die( 'Connect Error: ' . $mysqli->connect_errno . ': ' . $mysqli-> connect_error);
	}
	
	// Insert our data
	$sql = "INSERT INTO user_data 
			( email, password, firstname, lastname, addressline1,
			addressline2, city, state, zipcode, cardnumber, cardname, expiry, cvc, plan) VALUES 
		   ('{$mysqli->real_escape_string($_POST['email'])}',
			'{$mysqli->real_escape_string($_POST['password'])}',
			'{$mysqli->real_escape_string($_POST['firstname'])}',
			'{$mysqli->real_escape_string($_POST['lastname'])}',
			'{$mysqli->real_escape_string($_POST['addressline1'])}',
			'{$mysqli->real_escape_string($_POST['addressline2'])}',
			'{$mysqli->real_escape_string($_POST['city'])}',
			'{$mysqli->real_escape_string($_POST['state'])}',
			'{$mysqli->real_escape_string($_POST['zipcode'])}',
			'{$mysqli->real_escape_string($_POST['number'])}',
			'{$mysqli->real_escape_string($_POST['name'])}',
			'{$mysqli->real_escape_string($_POST['expiry'])}',
			'{$mysqli->real_escape_string($_POST['cvc'])}',
			'{$mysqli->real_escape_string($_POST['plan'])}'
			)";
	
	$insert = $mysqli->query($sql);
	
	// Print Response from MySQL
	
	if ( $insert ) {
		
		echo "Success! Row ID: {$mysqli->insert_id}";
	} else {
		die("Error: {$mysqli->errno} : {$mysqli->error}");
	}
	
	// Close our connection
	$mysqli->close();
	
	header("Location: thanks.html"); /* Redirect browser */
	exit();
}
?>

