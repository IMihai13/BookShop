<?php
$category='Science';//

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="insert into categories (EngName) values 
('$category')";
$query=mysqli_query($con , $sql);


?>