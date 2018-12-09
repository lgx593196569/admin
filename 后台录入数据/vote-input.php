<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>信息录入</title>
	<link rel="stylesheet" type="text/css" href="http://g.alicdn.com/sj/dpl/1.5.1/css/sui.min.css">
	<link rel="stylesheet" type="text/css" href="http://g.alicdn.com/sj/dpl/1.5.1/css/sui-append.min.css">
	<style>
		ul li{
			list-style:none;
		}
		.sui-container{
			width: 900px;
			height: 600px;
			border:2px solid #41719c;
			margin-top: 20px;
		}
		.my-head{
			height: 80px;
			line-height: 80px;
			border-bottom:2px solid #4a719c;
			font-size:30px;
			text-align:center;
		}
		.sui-layout{
			height: 100%;
			margin-top: -23px;
		}
		.sidebar{
			height:520px;
			border-right:2px solid #41719c;
		}
		.menu{
			margin-top:100px;
			margin-left:30px;
			font-size:25px;
		}
		.menu li{
            margin-top:100px;
        }
	</style>
</head>
<body>
	<div class="sui-container">
		<div class="my-head">北京网络职业学院---公司管理系统 V1.0</div>
<div class="sui-layout">
	<div class="sidebar">
		<div class="box">
			<ul class="menu">
				<li>
					<a href="clue-input.php">录入信息1</a>
                </li>
                <li>
					<a href="vote-input.php">录入信息2</a>
				</li>
			</ul>
		</div>
	</div>
<div class="content" style="padding-top: 50px;margin-top: 22px;">
	<form class="sui-form form-horizontal sui-validate" action="vote-save.php" method="post" enctype="multipart/form-data" style="margin-left: 120px;">
			<input type="hidden" name="action" value="add">
		<div class="control-group">
			<label for="surname" class="control-label">姓:</label>
			<div class="controls">
				<input type="text" id="surname" name="surname" class="input-large input-fat"  placeholder="输入姓">
			</div>
		</div>
		<div class="control-group">
			<label for="name" class="control-label">名:</label>
			<div class="controls">
				<input type="text" id="name" name="name" class="input-large input-fat"  placeholder="输入名">
			</div>
		</div>
		<div class="control-group">
			<label for="post" class="control-label">职位:</label>
			<div class="controls">
				<input type="text" id="post" name="post" class="input-large input-fat"  placeholder="输入职位" data-rules="required|minlength=2|maxlength=40">
			</div>
		</div>
		<div class="control-group">
			<label for="email" class="control-label">邮箱：</label>
			<div class="controls">
			<input type="text" id="email" placeholder="输入邮箱" data-rules="required|email" name="email">
			</div>
		</div>
		<div class="control-group">
			<label for="tel" class="control-label">座机号码：</label>
			<div class="controls">
			<input type="text" id="tel" placeholder="输入电话号" data-rules="required|tel" name="tel">
			</div>
		</div>
		<div class="control-group">
			<label for="mobile" class="control-label">手机号码：</label>
			<div class="controls">
			<input type="text" id="mobile" placeholder="输入手机号" data-rules="required|tel" name="mobile">
			</div>
		</div>
		<div class="control-group">
			<label for="clue" class="control-label">线索来源:</label>
			<div class="controls">
				<input type="text" id="clue" name="clue" class="input-large input-fat"  placeholder="输入线索来源" data-rules="required|minlength=2|maxlength=40">
			</div>
		</div>
		<div class="control-group">
			<label for="owner" class="control-label">线索所有者:</label>
			<div class="controls">
				<input type="text" id="owner" name="owner" class="input-large input-fat"  placeholder="输入线索所有者" data-rules="required|minlength=2|maxlength=40">
			</div>
		</div>
		<div class="control-group">
			<label for="time" class="control-label">日期加时间：</label>
			<div class="controls">
			<input type="text" id="time" placeholder="输入时间" data-rules="required|datetime" name="time" data-toggle="datepicker" data-date-timepicker="true">
			</div>
		</div>
		<div class="control-group">
			<label for="file" class="control-label">照片：</label>
			<div class="controls">
				<input type="file" name="file" id="file">
			</div>
		</div>
		<div class="control-group">
			<label class="control-label"></label>
			<div class="controls">
				<input type="reset" value="取消" name="" class="sui-btn btn-large ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<input type="submit" value="提交" name="" class="sui-btn btn-large btn-primary">
			</div>
		</div>
	</div>
	</form>
</div>
</body>
</head>
<script type="text/javascript" src="http://g.alicdn.com/sj/lib/jquery.min.js"></script>
<script type="text/javascript" src="http://g.alicdn.com/sj/dpl/1.5.1/js/sui.min.js"></script>