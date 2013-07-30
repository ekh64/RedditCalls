<?php
$url = "http://www.reddit.com/r/subreddits/search.json?q=".$_GET["q"];

$contents = @file_get_contents($url);
if($contents === FALSE) { echo "There is an error";}
echo $contents;
?>