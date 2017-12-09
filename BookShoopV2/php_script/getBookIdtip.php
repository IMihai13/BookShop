<?php
$id=$_GET['id'];

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT Id_tip FROM books WHERE Id_book='$id'";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query))
    echo json_encode($row['Id_tip']);
?>