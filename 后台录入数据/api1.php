<?php
include "conn.php";
//定义返回数据的json
$responseArr = array(
    "code"=>200,
    "data"=>null
);
//获取所有的数据
$sql = "select * from linkman";
//查询数据库
$result = mysqli_query($conn,$sql);
if(mysqli_num_rows($result)>0){
    //定义一个数组
    $upload = array();
    //返回根据从结果集取得的行生成的关联数组
    while($row = mysqli_fetch_assoc($result)){
        //放入数组中
        $upload[] = $row;
    }
    $responseArr["data"] = $upload;
}else{
    $responseArr["code"] = 207;
}
//关闭数据库
mysqli_close($conn);
//将responseArr转换为json格式发送到前端
die(json_encode($responseArr));
?>