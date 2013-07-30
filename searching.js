/**
 * @author Erica Hyman
 */

function search(){
	var q = document.getElementById("query").value;
	$.getJSON('handshake.php?q='+q, function(data) {
		var text = "";
		for(var i in data.data.children){
			var t = data.data.children[i].data;
			text += "<p><a href='"+t.url+"' target='_blank'>"+t.title+"</a>&#32;("+t.subreddit+")&#32;<input type=button id='button"+i+"' onclick='expand("+i+")' value='Expand'>";
			text+= "<br/ >";
			text+= "Author: &#32; "+t.author;
			text+="<div id='text"+i+"' class='hide'>"+t.selftext+"<hr></div></p>";		
		}
		document.getElementById("results").innerHTML = text;
     });     
}

function expand(i){
	if(document.getElementById("text"+i).className == "hide"){
		document.getElementById("text"+i).className="show";
		document.getElementById("button"+i).value = "Collapse";
	}
	else{
		document.getElementById("text"+i).className="hide";
		document.getElementById("button"+i).value = "Expand";
	}	
}
