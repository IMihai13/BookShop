<?php

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");
if(!$con){
    echo json_encode('1');
}

$name = $_GET['name'];

$sql="SELECT Id_user FROM users WHERE UserName='$name'";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query))
    echo json_encode($row['Id_user']);
else
    echo json_encode('2');
?>