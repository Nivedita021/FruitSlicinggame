var playing=false;
var score;
var trialsleft;
var fruits=['apple','banana','grapes','cherries','mango','orange','pear','pine','apple'];
var step;
var act;
$(function(){
$("#gamest").click(function(){

if(playing==true)
{location.reload();}
else
{playing=true;
    score=0;
    $("#value").html(score); 
    //appearing lives box
$("#trialsleft").show(); 
trialsleft=3;
addhearts();
$("#gamest").html("Reset Game");
addfruits();
$("#gover").hide();
}


});


$("#fruits").mouseover(function(){
    score++;
    $("#slicesound")[0].play();
    $("#value").html(score);
   
   clearInterval(act);
   $("#fruits").hide("explode",500);
setTimeout(addfruits,500);
   
});



function addhearts()
{ $("#trialsleft").empty();
    for(i=0;i<trialsleft;i++){
        $("#trialsleft").append('<img src="images/heart.png" class="life">');
    }
}


function addfruits()
{
    $("#fruits").show();
    choosefruit();
    $("#fruits").css({
        'left':Math.round(Math.random()*500),'top':-50
    }

    );
    step=Math.round(Math.random()*5)+1;
    act=setInterval(function(){ $("#fruits").css('top',$("#fruits").position().top+step);
if($("#fruits").position().top>$("#ques").height())
{
    if(trialsleft>1){
        $("#fruits").show();
        choosefruit();
        $("#fruits").css({
            'left':Math.round(Math.random()*500),'top':-50
        }
    
        );
        step=Math.round(Math.random()*5)+1;
        trialsleft--;
        addhearts();
        
    }
    else
    {//game over 
        playing=false;
        $("#gamest").html("Start Game");
        $("#gover").show();
        $("#gamover")[0].play();
        $("#gover").html('<p>Game over!</p><p>Your score is '+score+'</p>');
        $("#trialsleft").hide();
        stopact();

}
}},10)
}
function choosefruit(){
    $("#fruits").attr('src','images/'+fruits[Math.round(8*Math.random())]+'.png');
}
function stopact()
{
    clearInterval(act);
    $("#fruits").hide();
}});