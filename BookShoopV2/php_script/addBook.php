<?php
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

$sql="insert into books (Id_tip,Name,Author,Editure,Image,Price,Description,Rating,NrVote) values 
('$idt','$name','$author','$editure','$image','$price','$description',0,0)";
$query=mysqli_query($con , $sql);
if(!$query)
    echo json_encode('false');
    else
        echo json_encode('true');

?>