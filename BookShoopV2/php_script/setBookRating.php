<?php
$id=2;//
$field='Id_book';
$fieldd1='Rating';
$fieldd2='NrVote';
$newrat=5;//

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");

$sql="SELECT $fieldd1,$fieldd2 FROM books WHERE $field=$id";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query)){
     $rating=(($row[$fieldd1]*$row[$fieldd2])+$newrat)/($row[$fieldd2]+1);
     $votes=$row[$fieldd2]+1;
     $sql1="UPDATE books SET NrVote=$votes,Rating=$rating WHERE $field=$id";//?????
     $query1=mysqli_query($con, $sql1);
}
?>