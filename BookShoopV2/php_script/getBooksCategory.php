<?php
$id=$_GET['id'];

$localost = 'localhost';
$user = 'root';
$password = 'pw~2017!!';
$database = 'bookshop';
$con=mysqli_connect("$localost","$user","$password","$database");
$lst=array();
$k=0;
$sql="SELECT Id_book FROM books WHERE Id_tip=$id";
$result=mysqli_query($con, $sql);
if(!$result)
    echo json_encode('err');
    
while ($row=mysqli_fetch_array($result))
{
    $lst[$k]=$row['Id_book'];
    $k=$k+1;
}
echo json_encode($lst);
    
?>