
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

function createRecipeHTML(recipeTitle, containsTitleImage, titleImageFileName, recipeGoal, recipeSteps){
                var htmlTags = '<!DOCTYPE html>'
                                +'<html>';

                var head = 
                    '<head>'
                        +'<title> ' + recipeTitle + ' - League Level 0</title>'
                        +'<meta charset="UTF-8">'
                        +'<meta name="viewport" content="width=device-width, initial-scale=1">'
                        +'<link rel="stylesheet" href="https://league-central.github.io/curriculum/style/style.css">'
                        +'<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway">'
                        +'<link rel="icon" type="image/png" href="https://league-central.github.io/curriculum/img/favicon.png">'
                        +'<script src="https://league-central.github.io/curriculum/script/headerAndFooter.js"></script>'
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
                                        +'<hr>';
    
                if(containsTitleImage){
                    body+= '<img src='+titleImageFileName+' alt="'+recipeTitle+' image">'
                }
                                      
                body+=
                                    '</div>'
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
    recipeStepsString = recipeStepsString.trim();
    recipeStepsString+="\n9.";   //this makes it so that the final step is caught by the regex
    var matches = recipeStepsString.match(/[1-9]?[0-9]\.\s(.+?\s+?)+?(?=(?!<pre[^>]*?>)[1-9]?[0-9]\.(?![^<]*?<\/pre>))/gm);
    var output = "";
    for(var i=0; i<matches.length; i++){
        matches[i] = matches[i].replace(/[1-9]?[0-9]\.\s+/gm, '');
        output+='<li>' + matches[i] + '</li>';
    }
    return output
}