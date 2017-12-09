<?php
$id=$_GET['id'];

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");
if(!$con){
    echo json_encode('10');
}

$sql="SELECT Password  FROM users WHERE Id_user='$id'";
$query=mysqli_query($con, $sql);
if($row=mysqli_fetch_array($query)){
		echo json_encode($row['Password']);  	
}
else 
    echo json_encode('2');
?>