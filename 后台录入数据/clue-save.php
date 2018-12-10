
<?php
	$surname = $_REQUEST['surname'];//姓
	$name = $_REQUEST['name'];//名
	$post = $_REQUEST['post'];//职位
	$email = $_REQUEST['email'];//邮箱
	$tel = $_REQUEST['tel'];//电话
	$clue = $_REQUEST['clue'];//线索来源
	$owner = $_REQUEST['owner'];//线索所有者
	include "conn.php";
	

	$sql = "insert into clew(surname,name,post,email,tel,clue,owner) value('{$surname}','{$name}','{$post}','{$email}','{$tel}','{$clue}','{$owner}')";



	$reselt = mysqli_query($conn,$sql);
	if($reselt){
		echo "上传成功";
		//页面指定1秒后跳转
		header("Refresh:1;url=clue-input.php");
	}else{
		echo "上传失败";
	}
	//关闭链接，释放资源
	mysqli_close($conn);
?>