<?php
$id=2;//
$field='Id_tip';

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT EngName FROM categories WHERE $field=$id";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query))
    echo $row['EngName'];
?>