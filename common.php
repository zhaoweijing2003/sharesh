<?php
function showMenu(){
	return "<a href=\"user.php?screen_name=".USER."\">home</a>&nbsp;<a href=\"index.php?type=timeline\">timeline</a>&nbsp;<a href=\"index.php?type=mentions\">@me</a>&nbsp;<a href=\"index.php?type=favs\">favs</a>&nbsp;<a href=\"inbox.php\">inbox</a>&nbsp;<a href=\"sent.php\">sent</a>&nbsp;<a href=\"img.php\">img</a>&nbsp;<a href=\"list.php\">list</a>";
}

function showPostForm(){
	return	"<FORM METHOD=\"post\" ACTION=\"post.php\">\n
	<TEXTAREA NAME=\"text\" ROWS=\"3\" COLS=\"20\"></TEXTAREA>\n
	<INPUT TYPE=\"submit\" value=\"post\">\n
</FORM>";
}

function showPostDMForm($screen_name){
	return "<FORM METHOD=\"post\" ACTION=\"post_dm.php\">
    <INPUT TYPE=\"text\" NAME=\"user_name\" value=\"".$screen_name."\">\n
	<INPUT TYPE=\"text\" NAME=\"text\">\n
	<INPUT TYPE=\"submit\" value=\"send\">\n
</FORM>";
}
function DeCode($string,$operation,$key=''){
    $key=md5($key);
	$key_length=strlen($key);
	$string=$operation=='D'?base64_decode($string):substr(md5($string.$key),0,8).$string;
	$string_length=strlen($string);
	$rndkey=$box=array();
	$result='';
	for($i=0;$i<=255;$i++)
	{
		$rndkey[$i]=ord($key[$i%$key_length]);
		$box[$i]=$i;
	}
	for($j=$i=0;$i<256;$i++)
	{
		$j=($j+$box[$i]+$rndkey[$i])%256;
		$tmp=$box[$i];
		$box[$i]=$box[$j];
		$box[$j]=$tmp;
	}
	for($a=$j=$i=0;$i<$string_length;$i++)
	{
		$a=($a+1)%256;
		$j=($j+$box[$a])%256;
		$tmp=$box[$a];
		$box[$a]=$box[$j];
		$box[$j]=$tmp;
		$result.=chr(ord($string[$i])^($box[($box[$a]+$box[$j])%256]));
	}
	if($operation=='D')
	{
		if(substr($result,0,8)==substr(md5(substr($result,8).$key),0,8))
		{
			return substr($result,8);
		}
		else
		{
			return'';
		}
	}
	else
	{
		return str_replace('=','',base64_encode($result));
	}
}

function my_url_encode($url){
	return urlencode(DeCode($url,'E',ENCRYPT_CODE));
}

function my_url_decode($url){
	return DeCode($url,'D',ENCRYPT_CODE);
}

function twitter_parse_links_callback($matches) {
  $url = $matches[1];
  $encoded_url=my_url_encode($url);
  return "<a href='b.php?g=".$encoded_url."' target='blank'>".$url."</a>";
}

function search_links_callback($matches) {
  $q = $matches[3];
  return "<a href='search.php?q=".$q."'>#".$q."</a>";
}

function twitter_parse_tags($input) {
  $out = preg_replace_callback('#(\w+?://[\w\#$%&~/.\-;:=,?@\[\]+]*)(?<![.,])#is', 'twitter_parse_links_callback', $input);
  $out = preg_replace('#(^|\s)@([a-z_A-Z0-9]+)#', '$1@<a href="user.php?screen_name=$2">$2</a>', $out);  
  $out = preg_replace_callback('#(^|\s)(\\#([a-z_A-Z0-9:_-]+))#', 'search_links_callback', $out);
  return $out;
}

function post_to_twitter($url,$post_data){
	$ch = curl_init();
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_USERPWD, USER_PASS);
	curl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:'));
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_VERBOSE, 0);
	curl_setopt($ch, CURLOPT_HEADER, 0);
	curl_setopt($ch, CURLOPT_TIMEOUT, 10);
	curl_setopt($ch, CURLOPT_USERAGENT, USERAGENT);
	curl_setopt($ch, CURLOPT_POST, count($post_data));
	curl_setopt($ch, CURLOPT_POSTFIELDS, $post_data);
	curl_exec($ch);
	curl_close($ch);
}

function get_from_twitter($url){
	$ch = curl_init($url);
	curl_setopt($ch, CURLOPT_USERPWD, USER_PASS);
	curl_setopt($ch, CURLOPT_HTTPAUTH, CURLAUTH_ANY);
	curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	$output=curl_exec($ch);	
	curl_close($ch);
	return json_decode($output);
}

function obj_to_array($obj){
	$arr=array();
	foreach($obj as $key=>$value){
		if(is_object($value)){
			$arr[$key]=obj_to_array($value);
		} else {
			if(gettype($value)=="string"){
				$value=str_replace("glype","g-l-y-p-e",$value);
			}
			$arr[$key]=$value;
		}
	}
	return $arr;
}

function show_action($screen_name,$type,$page,$id,$favorited){
	if($screen_name==USER){
		echo "<a href='del.php?type=".$type."&page=".$page."&id=".$id."'>del</a><br/>";
	} else {
		if($favorited=="1"){
			echo "<a href='fav.php?ftype=unfav&type=".$type."&page=".$page."&id=".$id."'>unfav</a><br/>";
		} else {
			echo "<a href='fav.php?ftype=fav&type=".$type."&page=".$page."&id=".$id."'>fav</a><br/>";
		}
	}
}

function show_color_div($i){
	if($i%2==0){
		echo "<div style='background-color: #FFFFFF'>\n";	
	} else {
		echo "<div style='background-color: #CCFFFF'>\n";	
	}
}

function show_color($i){
	if($i%2==0){
		echo "style='background-color: #FFFFFF'";	
	} else {
		echo "style='background-color: #CCFFFF'";	
	}
}


function show_msg($i,$msg,$type,$page){
	//show_color_div($i);
	//echo "<img src='".$msg['user']['profile_image_url']."' height='16'>";
	$screen_name=$msg['user']['screen_name'];
	//echo "<a href='user.php?screen_name=".$screen_name."'>".$screen_name."</a>: ";
	$created=strtotime($msg['created_at']);
	$created = $created ? date('Y-m-d H:i', $created) : $created;
	//echo $created . " : ";
	$id=$msg['id'];
	//show_action($screen_name,$type,$page,$id,$favorited);
	$parsed = twitter_parse_tags($msg['text']);
	//echo $parsed."\n";
	//echo "</div>\n";
echo "<div class=\"msg\">\n";
echo "<div class=\"datetime\">".$created."</div>\n";
//echo "<div class=\"srcTag srcTag_0\">&#160;</div>\n";
echo "<div id=\"msg_".$id."\" class=\"content\">".$parsed."</div>\n";
echo "</div>\n";
}

function show_search_msg($i,$msg,$type,$page){
	show_color_div($i);
	echo "<img src='".$msg['profile_image_url']."' height='16'>";
	$screen_name=$msg['from_user'];
	echo "<a href='user.php?screen_name=".$screen_name."'>".$screen_name."</a>: ";
	$parsed = twitter_parse_tags($msg['text']);
	echo $parsed."\n";
	$id=$msg['id'];
	echo "<a href='re.php?id=".$id."'>re</a><br/></div>\n";
}

function show_dm_msg($i,$msg,$type){
	show_color_div($i);
	echo "<img src='".$msg['sender']['profile_image_url']."' height='16'>";
	$screen_name=$msg['sender']['screen_name'];
	echo "<a href='user.php?screen_name=".$screen_name."'>".$screen_name."</a>: ";
	$parsed = twitter_parse_tags($msg['text']);
	echo $parsed."\n";
	if($type=="inbox"){
		echo "<a href=\"inbox.php?screen_name=".$screen_name."\">re</a><br/></div>\n";
	} else {
		echo "<br/>\n</div>\n";
	}
}

function common_replace($text){
	$text=str_replace("\\\\","\\",$text);
	$text=str_replace("\\\"","&quot;",$text);
	$text=str_replace("\\'","&#39;",$text);
	return $text;
}
?>