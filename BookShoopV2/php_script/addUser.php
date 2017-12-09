<?php

$usern=$_GET['user'];
$pass=$_GET['pass'];
$name=$_GET['name'];
$pname=$_GET['pname'];
$adress=$_GET['adress'];
$phone=$_GET['phone'];
$email=$_GET['email'];

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="insert into users (UserName,Password,Name,PName,Adress,Phone,Email,Admin) values 
('$usern','$pass','$name','$pname','$adress','$phone','$email',false)";
$query=mysqli_query($con , $sql);
if(!$query)
    echo json_encode('false');
else
    echo json_encode('true');

?>