<?php
$conn = mysqli_connect("localhost","root","");
mysqli_select_db($conn,"admin");
mysqli_query($conn,"set names utf8");
$responseArr = array(
    "code"=>200,
    "data"=>null
);
$sql = "select * from customer";
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){
    $uploadImg = array();
    while($row = mysqli_fetch_assoc($result)){
        $uploadImg[] = $row;
    }
    $responseArr["data"] = $uploadImg;
}else{
    $responseArr["code"] = 207;
}

mysqli_close($conn);
die(json_encode($responseArr,JSON_UNESCAPED_UNICODE));
?>