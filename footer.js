function addFooter() {
var left;
 var center;
 var right;
left = document.getElementById("leftDiv");
center = document.getElementById("centerDiv");
 right = document.getElementById("rightDiv");
 
left.innerHTML += "<a href=\"http://www.jointheleague.org\"><img class=\"footer\" src=\"https://league-level0.github.io/league.jpg\" alt=\"league-logo\" align=\"center\"></a>";
 
center.innerHTML +=  "<a href=\"http://jointheleague.github.io\"><img class=\"footer\" src=\"https://league-level0.github.io/teacher.gif\" alt=\"Teacher Info\"  align=\"center\"</a>";

right.innerHTML += "<a href=\"https://processing.org/reference\"><img class=\"footer\" src=\"https://league-level0.github.io/p3logo.jpeg\" alt=\"Processing Reference\"  align=\"center\"></a>";

}
