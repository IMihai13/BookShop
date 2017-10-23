<?php
$id=1;//
$field='Id_user';

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT UserName FROM users WHERE $field=$id";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query))
    echo $row['UserName'];
?>