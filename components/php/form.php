<?php
$conn = mysqli_connect("localhost","root","");
mysqli_select_db("$conn","admin");
mysqli_query($conn,"set names utf8");
$responseArr = array(
    "code"=>200,
    "data"=>null
);
$sql = "select * from id";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){
    $uploading = array();
    while($row = mysqli_fetch_assoc($result)){
        $uploading[] = $row;
    }
    $responseArr["data"] = $uploading;
}else{
    $responseArr["code"] = 207;
}

mysqli_close($conn);
die(json_encode($responseArr,JSON_UNESCAPED_UNICODE));
?>