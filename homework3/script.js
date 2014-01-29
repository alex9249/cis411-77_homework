var round="x";
var player1=[];
var player2=[];
var win1=[1,5,9];
var win2=[1,2,3];
var win3=[1,4,7];
var win4=[4,5,6];
var win5=[7,8,9];
var win6=[7,5,3];
var win7=[2,5,8];
var win8=[3,6,9];
var wins=[win1,win2,win3,win4,win5,win6,win7,win8];
var score1=0;
var score2=0;

var startgame=function(){
	player1=[];
	player2=[];
	$(".square").each(function(){
		$(this).text("");
	});
	wins=[win1,win2,win3,win4,win5,win6,win7,win8];
	round="x";
}

$(".clickable").click(function(){
	var celltext=$(this).text();
	if(celltext==""){
		if(round=="x"){
		$(this).text("x");
		player1.push($(this).data("val"));
		round="o";
		}
		else{
			$(this).text("O");
			player2.push($(this).data("val"));
			round="x";
		}
	$.each(wins,function(i,v){
		if(player1.length>=3){
			var flag = true;
			
			$.each(v,function(key,value){
				if($.inArray(value,player1)==-1){
					flag = false;
				}
			})
			if(flag == true){
				window.alert("Player 1 Wins!");
				score1+=1;
				$("#score1").text("Player 1 Score = "+score1);
				return startgame();
			}
		}
		if(player2.length>=3){
			var flag = 1;
			$.each(v,function(key,value){
				if($.inArray(value,player2)==-1){
					flag = 2;
				}
			})
			if(flag == 1){
				window.alert("Player 2 Wins!");
				score2+=1;
				$("#score2").text("Player 2 Score = "+score2);
				return startgame();;
			}
		}
	});
	};
});
$("#reset").click(function(){
	$("#score1").text("Player 1 Score = ");
	$("#score2").text("Player 2 Score = ");
});
$("#playagain").click(function(){
	startgame();
});

			