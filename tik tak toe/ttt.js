function refresh(){
    document.querySelectorAll(".box").innerHTML=" ";
}
var turn = 0;
function check(){
    if(turn==0){
        turn = 1;
        return "X";
    }
    else{
        turn = 0;
        return "O";
    }
}
let mywinner;
let count = 0;
let k;
function myfunction(id){    
    if(document.getElementById(id).innerHTML==''){
        k = check(turn);
        document.getElementById(id).innerHTML=k;
    }
    if(count>3){
        mywinner = win(k);
        if(mywinner==undefined){
            mywinner="";
        }
        document.getElementById("winner").innerHTML=mywinner;
    }
    count++;
}
let i;
let player;
let my=document.getElementsByClassName("box");
function win(player){
    if(player=="X"){
        if(my[i=1].innerHTML==player||my[i=4].innerHTML==player||my[i=7].innerHTML==player){
            if(my[i+1].innerHTML==player && my[i-1].innerHTML==player){
                return "player 1 is winner";
            }
        }
        else if(my[i=3].innerHTML==player||my[i=4].innerHTML==player||my[i=5].innerHTML==player){
            if(my[i+3].innerHTML==player && my[i-3].innerHTML==player){
                return "player 1 is winner";
            }
        }
        else if(my[i=4].innerHTML==player){
            if(my[i-4].innerHTML==player && my[i+4].innerHTML==player){
                return " player 1 is the winner";
            }
            else if(my[i-2].innerHTML==player && my[i+2].innerHTML==player){
                return "player 1 is the winner";
            }
        }
    }
    else if(player=="O"){
        if(my[i=1].innerHTML==player||my[i=4].innerHTML==player||my[i=7].innerHTML==player){
            if(my[i+1].innerHTML==player && my[i-1].innerHTML==player){
                return "player 2 is winner";
            }
        }
        else if(my[i=3].innerHTML==player||my[i=4].innerHTML==player||my[i=5].innerHTML==player){
            if(my[i+3].innerHTML==player && my[i-3].innerHTML==player){
                return "player 2 is winner";
            }
        }
        else if(my[i=4].innerHTML==player){
            if(my[i-4].innerHTML==player && my[i+4].innerHTML==player){
                return "player 2 is the winner";
            }
            else if(my[i-2].innerHTML==player && my[i+2].innerHTML==player){
                return "player 2 is the winner";
            }
        }

    }
    else{
        return "";
    }
        
}
