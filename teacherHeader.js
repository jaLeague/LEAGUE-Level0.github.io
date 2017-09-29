function teacherHeader() {
var links;

links = document.getElementById("teacherLinks");

links.innerHTML += "<table><tr><td>";
links.innerHTML += "<a href=\"http://www.jointheleague.org\"><img class=\"footer\" src=\"https://league-level0.github.io/league.jpg\" alt=\"league-logo\" align=\"center\"></a>";
links.innerHTML += "</td><td>";
links.innerHTML += "<a href=\"http://jointheleague.github.io\"><img class=\"footer\" src=\"https://league-level0.github.io/teacher.png\" alt=\"Teacher Resources\"  align=\"center\"</a>";
links.innerHTML += "</td><td>";
 links.innerHTML += "<a href=\"https://jtl.pike13.com\"><img class=\"footer\" src=\"https://league-level0.github.io/pike13.png\" alt=\"Legaue Hub\"  align=\"center\"></a>";
links.innerHTML += "</td></tr></table>";
}
