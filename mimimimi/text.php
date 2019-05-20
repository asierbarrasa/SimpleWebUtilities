<?php
echo "<script>console.log( 'Debug Objects' );</script>";
$conn = new mysqli('localhost', '', '', '');
$text=$_POST['text'];
$text2=$_POST['text2'];
$sql="INSERT INTO `texto` (`id`, `text`, `text2`) VALUES (NULL, '$text', '$text2')";
$conn->query($sql);
?>