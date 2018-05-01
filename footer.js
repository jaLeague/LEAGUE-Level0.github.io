function addFooter() {
var left;
 var center;
 var right;
left = document.getElementById("leftDiv");
center = document.getElementById("centerDiv");
right = document.getElementById("rightDiv");
 
left.innerHTML += "<a href=\"http://www.jointheleague.org\"><img class=\"footer\" src=\"https://league-level0.github.io/league.jpg\" alt=\"league-logo\" align=\"center\" height: 225.00px;></a>";
 
center.innerHTML +=  "<a href=\"https://docs.oracle.com/javase/8/docs/api/\"><img class=\"footer\" src=\"https://league-level0.github.io/java.png\" alt=\"Java API\"  align=\"center\" height: 225.00px;></a>";

right.innerHTML += "<a href=\"https://processing.org/reference\"><img class=\"footer\" src=\"https://league-level0.github.io/p3logo.jpeg\" alt=\"Processing Reference\"  align=\"center\" height: 225.00px;></a>";

}
