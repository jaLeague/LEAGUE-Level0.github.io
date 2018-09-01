function addHeader() {
    var links;

    links = document.getElementById("header");

    links.innerHTML += "<span>";
    links.innerHTML += "<a href=\"http://www.jointheleague.org\"><img class=\"footer\" src=\"https://league-level0.github.io/league.jpg\" alt=\"league-logo\"></a>";
    links.innerHTML += "</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>";
    links.innerHTML += "<a href=\"http://jointheleague.github.io\"><img class=\"footer\" src=\"https://league-level0.github.io/teacher.png\" alt=\"Teacher Resources\"</a>";
    links.innerHTML += "</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span>";
    links.innerHTML += "<a href=\"https://jtl.pike13.com\"><img class=\"footer\" src=\"https://league-level0.github.io/pike13.png\" alt=\"Legaue Hub\"></a>";
    links.innerHTML += "<a href=\"mailto:curriculum@jointheleague.org\"><img class=\"footer\" src=\"https://league-level0.github.io/suggestions.jpg\" alt=\"Recipe Suggestions\"</a>";  
    links.innerHTML += "</span>";
}

function addFooter() {

    var footer = document.getElementById("footer");

    footer.innerHTML += "<a href=\"http://www.jointheleague.org\"><img class=\"footer\" src=\"https://league-level0.github.io/league.jpg\" alt=\"league-logo\" align=\"center\"></a>";

    footer.innerHTML += "Copyright <a href=\"http://www.jointheleague.org\">The League of Amazing Programmers</a> 2013-2018";

    //footer.innerHTML += "References:";

    //footer.innerHTML += "<a href=\"https://docs.oracle.com/javase/8/docs/api/\"><img class=\"footer\" src=\"https://league-level0.github.io/java.png\" alt=\"Java API\"  align=\"center\"</a>";

    //footer.innerHTML += "<a href=\"https://processing.org/reference\"><img class=\"footer\" src=\"https://league-level0.github.io/p3logo.jpeg\" alt=\"Processing Reference\"  align=\"center\"></a>";



}