<?php
$book=$_GET['book'];

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT Id_book FROM books WHERE Name='$book'";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query))
    echo json_encode($row['Id_book']);
?>