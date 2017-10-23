<?php
$category='Science';//
$field='EngName';
$fieldd='Id_tip';

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT $fieldd FROM categories WHERE $field='$category'";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query))
    echo $row['Id_tip'];
?>