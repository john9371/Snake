let BoardWidth = 30;
let BoardHeight = 30;
let Board=document.getElementById('board');
let BoardSize=600;
let BoardSizepx="600px";
let TileSize = 20;
let TileSizeW;
let TileSizeH;
let Tiles={};
let Head = [3, 15]
let holdHead = []
let snakeSize = 2;
let numMoves = 0;
let snakeBody = [[2, 15], [1, 15]]
let snakeColored = []
snakeColored.push(Head)
snakeColored.push(snakeBody[0])
snakeColored.push(snakeBody[1])

//creates the board
Board.innerHTML="";
for(i=0;i<BoardHeight;i++){
    for(j=0;j<BoardWidth;j++){
        Board.innerHTML+=("<input type='button' class='Tile' id='" + j + "-" + i + "'></div>");
    }
}	
Tiles=document.getElementsByClassName('Tile');
document.addEventListener("keypress", function(e){
SnakeMove(e);
});
function snakeColor(){
    if(numMoves != 0){
        for(var i = 0; i <= snakeSize; i++){
            document.getElementById(snakeColored[i][0] + "-" + snakeColored[i][1]).style.background = "#2A2A2A";
        }
    }
        document.getElementById(Head[0] + "-" + Head[1]).style.background = "red";
        for(var i = 0; i < snakeSize; i++){
            document.getElementById(snakeBody[i][0] + "-" + snakeBody[i][1]).style.background = "red";
        }
        snakeColored = [];
        snakeBody.forEach(function(x){
            snakeColored.push(x);
        })
        snakeColored.unshift(Head);
    numMoves++;
    console.log("numMoves: " + numMoves)
}
function SnakeMove(e){
    holdHead = Head;
    if(e.key == 'a' && Head[0] != 0 && checkLocation(Head[0] -1, Head[1]) == true){
        Head[0] -= 1
        moveBody();
    }
    if(e.key == 'd' && Head[0] != 29 && checkLocation(Head[0] +1, Head[1]) == true){
        Head[0] += 1;
        moveBody();
    }
    if(e.key == 'w' && Head[1] != 0 && checkLocation(Head[0], Head[1] - 1) == true){
        Head[1] -= 1;
        moveBody();
    }
    if(e.key == 's' && Head[1] != 29 && checkLocation(Head[0], Head[1] + 1) == true){
        Head[1] += 1;
        moveBody();
    }
}
function moveBody(){
    if(!feedLocation(Head)){
        snakeBody.pop(snakeBody.length-1);
        snakeBody.unshift(holdHead);
    }else{
        snakeBody.unshift(holdHead)
    }
    snakeColor();
}
function checkLocation(x, y){
    for(var i = 0; i < snakeSize; i++){
        if(snakeBody[i][0] == x && snakeBody[i][1] == y){
            return false
        }
    }
    return true;
}
function feedLocation(Head){
    if(numMoves % 6 == 0){

    }

}
snakeColor();