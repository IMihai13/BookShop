<?php
$usern='userdg';//
$field='UserName';
$fieldd='Password';

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT $fieldd FROM users WHERE $field='$usern'";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query))
    echo $row[$fieldd];
else 
    echo JSON_ERROR_INVALID_PROPERTY_NAME;
?>