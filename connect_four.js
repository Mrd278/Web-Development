var player1=prompt('Enter your Name Player 1, your color will be blue');
var player2=prompt('Enter your Name Player 2, your color will be red');
var player1color='cyan';
var player2color='red';
var game_on=true;
var table=$('table tr');

function reportwin(rownum,colnum)
{
	console.log('you won starting at this row and column');
	console.log(rownum);
	console.log(colnum);
}

function changecolor(rowIndex,colIndex,color)
{
	console.log('colorchanged');
	table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
}

function returncolor(rowIndex,colIndex)
{
	return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
}

function checkbottom(colIndex){
	for(var row=5;row>-1;row--){
		var colorreport=returncolor(row,colIndex);
		if(colorreport=='rgb(128,128,128)'){
			return row;
		}
	}
}

function colormatchcheck(one,two,three,four){
	return (one===two && one===three && one===four && one!=="rgb(128,128,128)" && one!==undefined);
}

function horizontalWincheck()
{
	for(var row=0;row<6;row++)
	{
		for(var col=0;col<4;col++)
		{
			if(colormatchcheck(returncolor(row,col),returncolor(row,col+1),returncolor(row,col+2),returncolor(row,col+3)))
			{
				console.log('horiz');
				reportwin(row,col);
				return true;
			}
			else{
				continue;
			}
		}
	}
}

function VerticalWincheck()
{
	for(var row=0;row<7;row++)
	{
		for(var col=0;col<3;col++)
		{
			if(colormatchcheck(returncolor(row,col),returncolor(row+1,col),returncolor(row+2,col),returncolor(row+3,col)))
			{
				console.log('vertical');
				reportwin(row,col);
				return true;
			}
			else{
				continue;
			}
		}
	}
}

function DiagonalWincheck()
{
	for(var col=0;col<7;col++)
	{
		for(var row=0;row<3;row++)
		{
			if(colormatchcheck(returncolor(row,col),returncolor(row+1,col+1),returncolor(row+2,col+2),returncolor(row+3,col+3)))
			{
				console.log('Diag');
				reportwin(row,col);
				return true;
			}
			else if(colormatchcheck(returncolor(row,col),returncolor(row-1,col+1),returncolor(row-2,col+2),returncolor(row-3,col+3)))
			{
				console.log('Diag');
				reportwin(row,col);
				return true;
			}
			else{
				continue;
			}
		}
	}
}

var currentplayer=1;
var currentname=player1;
var currentcolor=player1color;

$('h3').text(player1+" it is your turn, Pick a column to drop in!");

$('button').on('click',function(){
	var col=$(this).closest('td').index();
	var bottomavail=checkbottom(col);
	changecolor(bottomavail,col,currentcolor);

	if(horizontalWincheck()||vertical||DiagonalWincheck()){
		$('h1').text(currentname+" You have won!");
		$('h3').fadeOut('fast');
		$('h2').fadeOut('fast');
	}
	currentplayer=currentplayer*-1;
	if(currentplayer===1){
		currentname=player1;
		$('h3').text(currentname+" it is your turn.");
		currentcolor=player1color;
	}else{
		currentname=player2;
		$('h3').text(currentname+" it is your turn")
		currentcolor=player2color;
	}
})