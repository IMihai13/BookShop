<?php
$idt=2;//
$name='sciencee';//
$author='Author2';//
$editure='Ed';//
$image='afaggdfhh';//
$price=49.99;//
$description='agyfbanhbwqlgasgfdsvbc afaoigfbwqk';//

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="insert into books (Id_tip,Name,Author,Editure,Image,Price,Description,Rating,NrVote) values 
('$idt','$name','$author','$editure','$image',$price,'$description',0,0)";
$query=mysqli_query($con , $sql);

?>