<?php
$id=$_GET['id'];

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT Price FROM books WHERE Id_book='$id'";
$query=mysqli_query($con, $sql);
if(!$query)
    echo json_encode('error');
if($row=mysqli_fetch_array($query))
    echo json_encode($row['Price']);
?>