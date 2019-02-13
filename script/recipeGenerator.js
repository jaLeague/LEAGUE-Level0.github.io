
function createRecipeHTML2(recipeTitle, recipeGoal, recipeSteps){
    var preformatted = document.createElement('pre');
     var head = 
                    '<head>'+
                        +'<title> ' + recipeTitle + ' - League Level 0</title>'
                        +'<meta charset="UTF-8">'
                        +'<meta name="viewport" content="width=device-width, initial-scale=1">'
                        +'<link rel="stylesheet" href="style/style.css">'
                        +'<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">'
                        +'<link rel="icon" type="image/png" href="../../img/favicon.png">'
                        +'<script src="../../script/headerAndFooter.js"></script>'
                    +'</head>';
    
    var test = '<head>';
    test+='<title> myTitle </title>';
    preformatted.innerHTML+=test;
    return preformatted;
}






function createRecipeHTML(recipeTitle, recipeGoal, recipeSteps){
                var htmlTags = '<!DOCTYPE html>'
                                +'<html>';

                var head = 
                    '<head>'
                        +'<title> ' + recipeTitle + ' - League Level 0</title>'
                        +'<meta charset="UTF-8">'
                        +'<meta name="viewport" content="width=device-width, initial-scale=1">'
                        +'<link rel="stylesheet" href="http://level0.jointheleague.org/style/style.css">'
                        +'<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">'
                        +'<link rel="icon" type="image/png" href="../../img/favicon.png">'
                        +'<script src="http://level0.jointheleague.org/script/headerAndFooter.js"></script>'
                    +'</head>';
    
    
                var body = 
                    '<body>'
                        +'<div id ="wrap">'
                            +'<div id ="main">'
                                +'<div id="header">'
                                    +'<script>addRecipeHeader();</script>'
                                +'</div>'
                                +'<div id = "recipePage">'
                                    +'<div id="recipeTitle">'
                                        +'<h1>'+recipeTitle+'</h1>'                                        
                                        +'<hr>'
                                        +'<img src="images/googlyEyes.png" alt="'+recipeTitle+'image">'
                                    +'</div>'
                                    +'<div id ="recipeBody">'
                                        +'<div id="recipeGoal">'
                                            +'<h2>Goal:</h2>'
                                            +'<p id="goal">'
                                            +recipeGoal
                                            +'</p>'
                                        +'</div>'
                                        +'<div id="recipeSteps">'
                                            +'<h2>Steps:</h2>'
                                            +'<ol id="stepList">'
                                            +formatRecipeSteps(recipeSteps)
                                            +'</ol>'
                                            +'<div style="clear:both;"></div>'
                                        +'</div>'
                                    +'</div>'
                                +'</div>'
                            +'</div>'
                        +'</div>'
                        +'<div id="footer">'
                            +'<script>addRecipeFooter();</script>'
                        +'</div>'
                    +'</body>';   
    
                var closingHTMLTag = 
                        '</html>';
            

    return htmlTags + head + body + closingHTMLTag;
    }

function formatRecipeSteps(recipeStepsString){
    var steps = recipeStepsString;
    var regex = /[1-9][0-9]?\.\s/;
    var output = ""
    //alert(steps.substring(24));
    //alert(steps);
    while(steps.search(regex) >= 0){
        var indexStart = steps.search(regex);
        var indexEnd = steps.slice(indexStart+4).search(regex);
        //alert("slice: \n" + steps.slice(indexStart+4));
        if(indexEnd===-1){
            indexEnd = steps.length;
        }
        //alert(indexStart + " " + indexEnd + " " + steps.substring(indexStart, indexEnd));
        output+='<li>' + steps.substring(indexStart, indexEnd).trim() + '</li>';
        steps = steps.substring(indexEnd);
    }
    
    //alert("output: \n" + output);
    return output;
    //recipeStepsString.slice(i).search(/re/);
    
}

function formatRecipeSteps2(recipeStepsString){
    alert(recipeStepsString);
    alert(recipeStepsString.search());
    // .    /^[1-9][0-9]?$/m
}
