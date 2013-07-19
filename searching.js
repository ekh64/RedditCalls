/**
 * @author Erica Hyman
 */

var clickcount = 0;

function init(){ //thoughts on preventing rate limits from being reached
	/*
	if(clickcount == null){
		clickcount = 0;
	}
	else if(clickcount == 30){
		
	}*/
}

function search(){
	//clickcount++;
	var q = document.getElementById("query").value;
	$.getJSON('http://www.reddit.com/r/subreddits/search.json?q='+q, function(data) {
		var text = "";
		for(var i in data.data.children){
			var t = data.data.children[i].data;
			text += "<p><a href='"+t.url+"' target='_blank'>"+t.title+"</a>&#32;("+t.subreddit+")";//&#32;<button onclick='expand("+t.selftext+")'>Expand</button>";
			text+= "<br/ >";
			text+= "Author: &#32; "+t.author;
			//text+="<div class='text'></div></p>";		
		}
		document.getElementById("results").innerHTML = text;
     });     
}

/*function expand(txt){
		document.getElementByClass("text").innerHTML = txt;
		alert(txt);
}*/
