score = 0;


//function for Update//

function updateScore()
{
    score = score + 1;
    document.getElementById("score").innerHTML = "Score:" + score;
}


//Fuction to save Score//


function saveScore()
{
    localStorage.setItem("score",score);
}


//Function next page//


function nextPage(){
    window.location = "activity_2.html";
}