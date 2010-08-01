<?php
//require "config.php";
require "common.php";
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Rover.Tang on Twitter</title>
<link rel="Shortcut Icon" href="/favicon.ico" type="image/x-icon" />
<link rel="stylesheet" href="base.css" type="text/css" />
</head>
<?php
$screen_name='rovertang';
$url="http://twitter.com/users/".$screen_name.".json";
$info=obj_to_array(get_from_twitter($url));
?>
<body>
<div id="header">
		<div class="inner">
			<div class="mycontent">
				<div class="caption">
					<h1 id="title"><a href="./"><?=$info["name"]?> on Twitter</a></h1>
					<div id="tagline"><?=$info["description"]?></div>
				</div>
				<!-- navigation START -->
				<ul id="navigation">

<li><a href="/" title="网站首页">网站首页</a></li>
				</ul>
				<!-- navigation END -->
				<div style="clear: right;"></div> 
		<ul id="menubar">
					<li class="cat-item cat-item-0">ID:<?=$info["screen_name"]?></li>
				<li class="cat-item cat-item-1">location:<?=$info["location"]?></li>
	<li class="cat-item cat-item-3">followers:<?=$info["followers_count"]?></li>
	<li class="cat-item cat-item-4">friends:<?=$info["friends_count"]?></li>
	<li class="cat-item cat-item-5">statuses:<?=$info["statuses_count"]?></li>
		</ul>







			</div>
		</div>
	</div>
<div class="outBox">
<?php 
$page=$_GET['page'];
if(!intval($page)>0){
	$page=1;
}
$url="http://twitter.com/statuses/user_timeline/".$screen_name.".json?page=".$page;
$timeline=obj_to_array(get_from_twitter($url));
$i=0;
foreach($timeline as $msg) {
	$i+=1;
//echo "<div class=\"msg\">\n";
//echo "<div class=\"datetime\"><p class=\"date\">2010-07-29</p><p class=\"time\">14:44</p></div>\n";
//echo "<div class=\"srcTag srcTag_0\">&#160;</div>\n";
//echo "<div id=\"msg_1365\" class=\"content\">往 Chrome 地址栏里粘帖网址的时候，会被自动 trim</div>\n";
	show_msg($i,$msg,$type,$page);
//echo "</div>\n";
}
echo "<div class=\"bottomBar\">\n";
echo "<div class=\"pageNav\">\n";
if($page>1){
	echo "<a class=\"newer\" id=\"pageNewer\" href='?page=".($page-1)."'>Newer</a> ";
}
echo "<a class=\"older\" id=\"pageOlder\" href='?page=".($page+1)."'>Older</a> ";
echo "</div>\n";
echo "<div class=\"info\">共有 ".$info["statuses_count"]." 条，分 ".ceil($info["statuses_count"] / 20)." 页显示，当前为第 ".$page." 页</div>\n";
echo "</div>\n";
?>
</div>
<div class="footer"><a hidefocus="true" href="./">Rover.Tang on Twitter</a> modify by <a hidefocus="true" href="http://sharesh.cn/">ShareSh.cn</a>, powered by <a hidefocus="true" href="http://code.google.com/p/tinytui2/">tinytui2</a>.</div>
</body>
</html>