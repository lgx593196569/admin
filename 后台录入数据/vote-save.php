
<?php
	$surname = $_REQUEST['surname'];//姓
	$name = $_REQUEST['name'];//名
	$post = $_REQUEST['post'];//职位
	$email = $_REQUEST['email'];//邮箱
	$tel = $_REQUEST['tel'];//电话
	$mobile = $_REQUEST['mobile'];//手机
	$clue = $_REQUEST['clue'];//线索来源
	$owner = $_REQUEST['owner'];//线索所有者
	$time = $_REQUEST['time'];//时间
	if ((($_FILES['file']['type'] == 'image/gif')||($_FILES['file']['type'] == 'image/png')||($_FILES['file']['type'] == 'video/mp4')||($_FILES['file']['type'] == 'image/jpeg')||($_FILES['file']['type'] == 'image/pjpeg'))&&($_FILES['file']['size'] < 10241000)){
        if($_FILES["file"]["error"] > 0){
            echo "错误: " . $_FILES["file"]["error"] . "<br />";
        }else{
            $names = date('YmdHis').$_FILES["file"]["name"];
            $filename = "upload/".date('YmdHis').$_FILES["file"]["name"];
            move_uploaded_file($_FILES["file"]["tmp_name"],$filename);
            move_uploaded_file($_FILES["file"]["tmp_name"],$names);
        }
    }else{
        echo "无效文件，文件格式或大小超出范围";
    }
	include "conn.php";
	

	$sql = "insert into linkman(surname,name,post,email,tel,mobile,clue,owner,time,picture) value('{$surname}','{$name}','{$post}','{$email}','{$tel}','{$mobile}','{$clue}','{$owner}','{$time}','{$names}')";



	$reselt = mysqli_query($conn,$sql);
	if($reselt){
		echo "上传成功";
		//页面指定1秒后跳转
		header("Refresh:1;url=vote-input.php");
	}else{
		echo "上传失败";
	}
	//关闭链接，释放资源
	mysqli_close($conn);
?>