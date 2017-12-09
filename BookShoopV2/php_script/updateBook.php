<?php
$id=$_GET['idb'];
$idt=$_GET['tip'];//
$name=$_GET['name'];;//
$author=$_GET['autor'];;//
$editure=$_GET['ed'];//
$image=$_GET['img'];//
$price=$_GET['price'];//
$description=$_GET['desc'];

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="update books set Id_tip='$idt',Name='$name',Author='$author',Editure='$editure',Image='$image',Price='$price',Description='$description' where Id_book='$id'";
$query=mysqli_query($con , $sql);
if(!$query)
    echo json_encode('false');
    else
        echo json_encode('true');
        
?>