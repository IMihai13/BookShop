<?php
$usern=_REQUEST[username];
$usern=_REQUEST[password];
$field='UserName';
$fieldd='Password';
$fieldd1='Id_user';

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT $fieldd,$fieldd1 FROM users WHERE $field='$usern'";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query)){
    if($row[$fieldd].equals($pass)
		echo row[$fieldd1];
	else
		echo -1;  	
}
else 
    echo -2;
?>