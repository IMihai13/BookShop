<?php
$id=2;//
$field='Id_book';

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT Name FROM books WHERE $field=$id";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query))
    echo $row['Name'];
?>