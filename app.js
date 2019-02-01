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
let numMoves = -1;
let snakeBody = [[2, 15], [1, 15]]
let snakeColored = []
let feedArr = [];
let score = 0;
var x = 0;
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
    if(numMoves != -1){
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
}
function SnakeMove(e){
    holdHead.push(Head[0])
    holdHead.push(Head[1])
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
    console.log(numMoves)
    if(numMoves == 1){
        console.log(x)
        setInterval(() =>{
            if(x<30){
                x++;
                console.log(x)
                    document.getElementById("timer").innerHTML = x;
            }
            else{
                document.getElementById("board").innerHTML = "Thank you for playing your score is " + score;
            }
        }, 1000);
    }
}
function moveBody(){
    if(!feedLocation(Head)){
        snakeBody.pop(snakeBody.length-1);
        snakeBody.unshift(holdHead);
    }else{
        snakeBody.unshift(holdHead)
    }
    holdHead = []
    snakeColor();
}
function checkLocation(x, y){
    for(var i = 0; i < snakeSize-1; i++){
        if(snakeBody[i][0] == x && snakeBody[i][1] == y){
            return false
        }
    }
    return true;
}
function feedLocation(Head){
    if(numMoves % 6 == 0){
        spawnFood();
    }
    console.log(feedArr)
    for(var i = 0; i < feedArr.length; i++){
        if(Head[0] == feedArr[i][0] && Head[1] == feedArr[i][1]){
            feedArr.splice(i, 1);
            score++;
            console.log(Head)
            console.log(feedArr[i])
            document.getElementById("score").textContent = "Score: " + score;
        }
    }
}
function spawnFood(){
    var i;
    var j;
    do{
    i = Math.floor(Math.random()*30);
    j = Math.floor(Math.random()*30)
    }while(Head[0] != i && Head[1] != j && checkLocation(i, j))
        document.getElementById(i + "-" + j).style.background = "yellow";
    feedArr.push([i, j]);
}
spawnFood();
snakeColor();