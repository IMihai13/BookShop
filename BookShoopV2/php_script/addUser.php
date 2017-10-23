<?php

$usern='user2';//
$pass='password3';//
$name='name2';//
$pname='pname2';//
$adress='adress2';//
$phone='0101010101';//
$email='anymail@s.com';//

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="insert into users (UserName,Password,Name,PName,Adress,Phone,Email,Admin) values 
('$usern','$pass','$name','$pname','$adress','$phone','$email',false)";
$query=mysqli_query($con , $sql);


?>