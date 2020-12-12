<?php 
session_start();
$username=$_POST['username'];
$password=$_POST['password'];
$con=mysqli_connect('localhost','root');
mysqli_select_db($con,'hotel');
$q="select * from user where username='$username' && password='$password'";
$res=mysqli_query($con,$q);
$no=mysqli_num_rows($res);
if($no==1){
    $_SESSION['username']=$username; 
	header('location:http://localhost/BhupenTravels/index.html');
}	
else
	header('location:http://localhost/BhupenTravels/login.php');
mysqli_close($con);
?>